class Story {
    constructor(story, client) {
        this.client = client;
        this.story = story;
        this.win = Titanium.UI.createWindow({
            top:0,
            backgroundColor: 'white',
        });
        this.view = Ti.UI.createScrollView({});
        this.win.add(this.view);
        this.client.getStory(story.slug).then(fetchedStory => {
            this.story = fetchedStory;
            this.render();
        }).catch(e => console.log(e));
    }

    render() {
        
        const screenWidth = Ti.Platform.displayCaps.platformWidth;

        const title = Ti.UI.createLabel({
            text: this.story.title,
            font:{
                fontWeight: 'bold',
                fontSize: 28,
                fontFamily: "Georgia",
            },

            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: 100,
            height: Ti.UI.SIZE,
            top: 5,
            left: 15,
            width: screenWidth - 30
        });
        this.view.add(title);
        let storyOffset = this.story.title.length > 42 ? 120 : this.story.title.length > 21 ? 80 : 40;

        const introText = Ti.UI.createLabel({
            text: this.story.introText,
            top: storyOffset,
            height: 200,
            left: 15,
            font:{
                fontSize: 12,
                fontFamily: "Georgia",
            },
            width: screenWidth - 30
        });
        this.view.add(introText);
        storyOffset += 200;

        if(this.story.images && this.story.images.length){
            this.createImageGallery(this.story.images, storyOffset, true);
            storyOffset += 310;
        }

        const body = Ti.UI.createLabel({
            text: this.story.body,
            top: storyOffset,
            height: 200,
            left: 15,
            font:{
                fontSize: 12,
                fontFamily: "Georgia",
            },
            width: screenWidth - 30
        });
        this.view.add(body);
        storyOffset += 200;

        if(this.story.products && this.story.products.length){
            this.createImageGallery(this.story.products, storyOffset, false);
        }
    }

    createImageGallery(images, offset, crop){
        const screenWidth = Ti.Platform.displayCaps.platformWidth;
        const imageViews = [];
        images.forEach(image => {
            let imageUrl;
            let calculatedWidth = screenWidth;
            let calculatedHeight = 300;
            if (crop) {
                imageUrl = image.getCropUrl(screenWidth, 300);

            } else {
                calculatedWidth = 300 / image.ratio;
                if(calculatedWidth > screenWidth) {
                    calculatedHeight = screenWidth * image.ratio;
                    calculatedWidth = screenWidth;
                }
                imageUrl = image.getScaledByHeight(calculatedHeight);
            }
            const imageView = Ti.UI.createImageView({
                image: imageUrl,
                top:0,
                height: calculatedHeight,
                width: calculatedWidth,
            });
            const imageWrapper = Ti.UI.createView({
                top:0,
                left:0,
                height: 300,
                width: screenWidth,
                backgroundGradient: {
                    type: 'linear',
                    colors: ['#66FFFFFF', '#660F0F0F'],
                    startPoint: { x: 0, y: 270 },
                    endPoint: { x: 0, y: '100%' },
                    backFillStart:false,
                    zIndex: 100,
                  }
            });
            imageWrapper.add(imageView);
            imageViews.push(imageWrapper);
        });
        const gallery = Ti.UI.createScrollableView({
            left: 0,
            top: offset,
            width: screenWidth,
            height: 300,
            backgroundColor: 'white',
            views:imageViews,
            showPagingControl:true
        });
        this.view.add(gallery);
    }
}

module.exports = Story;