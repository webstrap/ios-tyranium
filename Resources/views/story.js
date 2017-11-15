class Story {
    constructor(story, mainWin) {
        this.story = story;
        this.mainWin = mainWin;
        this.win = Titanium.UI.createWindow({});
        this.render();
    }

    render() {
        const storyView = Titanium.UI.createView({
            top: this.offset,
            left: 0,
            height: 420,
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
        
        const image = Ti.UI.createImageView({
            image: `https://img.styla.com/resizer/sfc_${screenWidth}x300/_${this.story.image}`,
            top: 45,
            left: 0,
            height: 300,
            width: screenWidth,
        });

        const body = Ti.UI.createLabel({
            text: this.story.body,
            top: 360,
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