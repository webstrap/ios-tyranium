class Image {
    constructor(image){
        Object.assign(this, image);
    }
    getUrl(options){
        return this.url;
    }

    getScaledByWidth(width){
        return `${this.url}?w=${width}&h=200&fit64=Y3JvcA==&crop64=ZmFjZXMsZW50cm9weQ==&q=80&fm64=anBn&dpr64=MQ==`
    }

    getScaledByHeight(height){
        return `${this.url}?h=${height}&fit64=Y3JvcA==&crop64=ZmFjZXMsZW50cm9weQ==&q=80&fm64=anBn&dpr64=MQ==`
    }

    getCropUrl(width,height){
        return `${this.url}?w=${3*width}&h=${3*height}&fit64=Y3JvcA==&crop64=ZmFjZXMsZW50cm9weQ==&q=80&fm64=anBn&dpr64=MQ==`
    }
}

module.exports = Image;