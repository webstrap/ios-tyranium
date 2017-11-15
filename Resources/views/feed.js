class Feed {
    constructor(){
        this.view = Ti.UI.createScrollView({top:180});
        this.data = [];
        this.offset = 0;
    }

    addStories(stories){
        this.data.push(stories);
        stories.forEach((story, pos) => {
            
            const storyView = Titanium.UI.createView({
                top: this.offset,
                left: 0,
                height: 351,
            });
        
            storyView.addEventListener("click", function(){
                storyView.backgroundColor = "#333";
                setTimeout(function(){storyView.backgroundColor = "#FFF";}, 100);
            });
        
            const title = Ti.UI.createLabel({
                text: story.title,
                font:{
                    fontWeight: 'bold',
                    fontSize: 14,
                    fontFamily: "Georgia",
                },
                top: 5,
                left: 15,
            });
            
            const screenWidth = Ti.Platform.displayCaps.platformWidth;
            const image = Ti.UI.createImageView({
                image:'https://img.styla.com/resizer/sfh_800x0/instagram-vipp-wohnen-im-design-himmel_81784_11168.jpeg',
                top: 24,
                left: 0,
                height: 300,
                width: screenWidth,
            });

            const body = Ti.UI.createLabel({
                text: story.body,
                top: 324,
                left: 15,
                font:{
                    fontSize: 12,
                    fontFamily: "Georgia",
                },
            });
            
            storyView.add(title);
            storyView.add(image);
            storyView.add(body);
        
            this.view.add(storyView);
            this.offset += 351;
        });
    }
}
module.exports = Feed;