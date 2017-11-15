const Story = require("./story");

class Feed {
    constructor(mainWin) {
        this.view = Ti.UI.createScrollView({ top: 170 });
        this.data = [];
        this.offset = 10;
        this.mainWin = mainWin;
    }

    addStories(stories) {
        this.data.push(stories);
        stories.forEach((story, pos) => {

            const imageOffset = story.title.length > 42 ? 120 : story.title.length > 21 ? 80 : 40;
            const storyView = Titanium.UI.createView({
                top: this.offset,
                left: 0,
                height: 410 + imageOffset,
            });

            storyView.addEventListener("touchstart", () => {
                storyView.backgroundColor = "#333";
                setTimeout(function () { storyView.backgroundColor = "#FFF"; }, 100);
            });

            storyView.addEventListener("click", () => {
                const storyWin = new Story(story, this.mainWin);
                this.mainWin.openWindow(storyWin.win, { animated: true });
            });

            const screenWidth = Ti.Platform.displayCaps.platformWidth;
            const title = Ti.UI.createLabel({
                text: story.title,
                font: {
                    fontWeight: 'bold',
                    fontSize: 28,
                    fontFamily: "Georgia",
                },

                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                top: 5,
                height: Ti.UI.SIZE,
                top: 5,
                left: 15,
                width: screenWidth - 30
            });
            const image = Ti.UI.createImageView({
                image: `https://img.styla.com/resizer/sfc_${screenWidth}x300/_${story.image}`,
                top: imageOffset,
                left: 0,
                height: 300,
                width: screenWidth,
            });

            const body = Ti.UI.createLabel({
                text: story.body,
                top: 305 + imageOffset,
                left: 15,
                font: {
                    fontSize: 12,
                    fontFamily: "Georgia",
                },
                width: screenWidth - 30
            });

            storyView.add(title);
            storyView.add(image);
            storyView.add(body);

            this.view.add(storyView);
            this.offset += 410 + imageOffset;
        });
    }
}

module.exports = Feed;