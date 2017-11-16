class Story {
    constructor(story, mainWin) {
        this.story = story;
        this.mainWin = mainWin;
        this.win = Titanium.UI.createWindow({});
        this.render();
    }

    render() {

        const imageOffset = this.story.title.length > 42 ? 120 : this.story.title.length > 21 ? 80 : 40;
        const storyView = Titanium.UI.createView({
            top: 150,
            left: 0,
            height: 800,
        });
    
        const screenWidth = Ti.Platform.displayCaps.platformWidth;
        const title = Ti.UI.createLabel({
            text: this.story.title,
            font:{
                fontWeight: 'bold',
                fontSize: 28,
                fontFamily: "Georgia",
            },

            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: 50,
            height: Ti.UI.SIZE,
            top: 5,
            left: 15,
            width: screenWidth - 30
        });
        
        const imageUrl = (this.story.images && this.story.images.length && this.story.images[0].getUrl()) 
                        || (this.story.products && this.story.products.length && this.story.products[0].getUrl());
        const image = Ti.UI.createImageView({
            image: imageUrl,
            top: 50 + imageOffset,
            left: 0,
            height: 300,
            width: screenWidth,
        });

        const body = Ti.UI.createLabel({
            text: this.story.body,
            top: 350 + imageOffset,
            left: 15,
            font:{
                fontSize: 12,
                fontFamily: "Georgia",
            },
            width: screenWidth - 30
        });
        
        storyView.add(title);
        storyView.add(image);
        storyView.add(body);
    
        this.win.add(storyView);
    }
}

module.exports = Story;