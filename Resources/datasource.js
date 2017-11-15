const Promise = require('./bluebird');

const XHR = require('./xhr');
const events = require('./events');

class Customer extends events {
    constructor(customerName) {
        super();

        this._customerName = customerName;

        this._xhr = new XHR();
    }

    _getStoryAPIURL() {
        return `https://storyapi.styla.com/api/users/${this._customerName}?domain=${this._customerName}`;
    }

    _getFeedURL(limit) {
        return `https://storyapi.styla.com/api/feeds/all?offset=0&limit=${limit}&domain=${this._customerName}`;
    }

    _getAndParseIfNeeded(URL) {
        const worker = new Promise((res, rej) => {
            this._xhr.get(URL, res, rej);
        });

        return worker.then(reply => JSON.parse(reply.data));
    }

    getConfig() {
        return this._getAndParseIfNeeded(this._getStoryAPIURL());
    }

    getFeed(limit = 20) {
        return this._getAndParseIfNeeded(this._getFeedURL(limit));
    }
}

module.exports = Customer;