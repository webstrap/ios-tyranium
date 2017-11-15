class Feed {
    constructor(){
        this.view = Ti.UI.createScrollView({top:170});
        this.data = [];
        this.offset = 10;
    }

    addStories(stories){
        this.data.push(stories);
        stories.forEach((story, pos) => {
            
            const storyView = Titanium.UI.createView({
                top: this.offset,
                left: 0,
                height: 360,
            });
        
            storyView.addEventListener("click", function(){
                storyView.backgroundColor = "#333";
                setTimeout(function(){storyView.backgroundColor = "#FFF";}, 100);
            });
        
            const screenWidth = Ti.Platform.displayCaps.platformWidth;
            const title = Ti.UI.createLabel({
                text: story.title,
                font:{
                    fontWeight: 'bold',
                    fontSize: 20,
                    fontFamily: "Georgia",
                },
                top: 5,
                left: 15,
                width: screenWidth - 30
            });
            
            const image = Ti.UI.createImageView({
                image: `https://img.styla.com/resizer/sfc_${screenWidth}x300/_${story.image}`,
                top: 30,
                left: 0,
                height: 300,
                width: screenWidth,
            });

            const body = Ti.UI.createLabel({
                text: story.body,
                top: 330,
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
        
            this.view.add(storyView);
            this.offset += 360;
        });
    }
}
module.exports = Feed;