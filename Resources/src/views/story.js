class Story {
    constructor(story, client) {
        this.client = client;
        this.story = story;
        this.win = Titanium.UI.createWindow({
            top:0,
            backgroundColor: 'white',
        });
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
        this.win.add(title);
        let storyOffset = this.story.title.length > 42 ? 120 : this.story.title.length > 21 ? 80 : 40;

        if(this.story.images && this.story.images.length){
            console.log(this.story.title, "images", JSON.stringify(this.story));
            this.createImageGallery(this.story.images, storyOffset);
            storyOffset += 310;
        }

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
        this.win.add(introText);

        if(this.story.products && this.story.products.length){
            console.log(this.story.title, "products", this.story.products);
            this.createImageGallery(this.story.products, storyOffset);
        }
    }

    createImageGallery(images, offset){
        const imageViews = [];
        images.forEach(image => {
            const imageUrl = image.getCropUrl(screenWidth, 300);
            const imageView = Ti.UI.createImageView({
                image: imageUrl,
                top:0,
                height: 300,
                width: screenWidth,
            });
            imageViews.push(imageView);
        });
        const gallery = Ti.UI.createScrollableView({
            left: 0,
            top: offset,
            width: screenWidth,
            height: 310,
            backgroundColor: 'white',
            views:imageViews,
            showPagingControl:true
        });
        this.win.add(gallery);
    }
}

module.exports = Story;