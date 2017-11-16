const Promise = require('../util/bluebird');

const XHR = require('../util/xhr');
const events = require('../util/events');
const feedConverter = require('./feedConverter');
const storyConverter = require('./storyConverter');

class Customer extends events {
    constructor(customerName) {
        super();

        this.customerName = customerName;

        this._xhr = new XHR();
        this.limit  = 10;
        this.offset = 0;
        this.loading = false;
    }

    _getStoryURL(slug) {
        return `https://redpanda.prod.us.magalog.net/v1/story/${this.customerName}/${slug}`;
    }

    _getFeedURL() {
        return `https://redpanda.prod.us.magalog.net/v1/feed/latest/${this.customerName}?offset=${this.offset}&limit=${this.limit}`;
    }

    _getAndParseIfNeeded(URL) {
        const worker = new Promise((res, rej) => {
            this._xhr.get(URL, res, rej, {parseJSON: true});
        });

        return worker.then(reply => {
            this.loading = false;
            if(reply.data.Feed){
                this.offset = reply.data.Feed && reply.data.Feed.meta.navigation.next;
                return feedConverter(reply.data.Feed.stories);
            }
            if(reply.data.slug){
                return storyConverter(reply.data);
            }
            
        });
    }

    getStory(slug) {
        if(this.loading){
            return Promise.reject();
        }
        this.loading = true;
        return this._getAndParseIfNeeded(this._getStoryURL(slug));
    }

    getFeed() {
        if(this.loading){
            return Promise.reject();
        }
        this.loading = true;
        return this._getAndParseIfNeeded(this._getFeedURL());
    }
}

module.exports = Customer;