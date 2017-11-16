const Promise = require('../util/bluebird');

const XHR = require('../util/xhr');
const events = require('../util/events');
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

    _getStoryAPIURL() {
        return `https://storyapi.styla.com/api/users/${this.customerName}?domain=${this.customerName}`;
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
            this.offset = reply.data.Feed && reply.data.Feed.meta.navigation.next;
            return reply.data.Feed.stories.map(storyConverter);
        });
    }

    getConfig() {
        return this._getAndParseIfNeeded(this._getStoryAPIURL());
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