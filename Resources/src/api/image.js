class Image {
    constructor(image){
        Object.assign(this, image);
    }
    getUrl(options){
        //{width, height, maxWidth, maxHeight}
        return this.url;
    }

    getScaledByWidth(width){

    }

    getScaledByHeight(height){

    }

    getCropped(width,height){

    }
}

module.exports = Image;