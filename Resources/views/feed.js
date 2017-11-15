class Feed {
    constructor(){
        this.view = Ti.UI.createScrollView({top:50});
        this.data = [];
        this.offset = 50;
    }

    addStories(stories){
        this.data.push(stories);
        stories.forEach((story, pos) => {
            
            const storyView = Titanium.UI.createView({
                top: this.offset,
                height: 251,
            });
        
            storyView.addEventListener("click", function(){
                storyView.backgroundColor = "#333";
                setTimeout(function(){storyView.backgroundColor = "#FFF";}, 100);
            });
        
            const title = Ti.UI.createLabel({
                text: story.title,
                top: 5,
                left: 5,
                fontSize: 14,
            });
        
            var image = Ti.UI.createImageView({
                image:'https://img.styla.com/resizer/sfh_600x0/instagram-vipp-wohnen-im-design-himmel_81784_11168.jpeg',
                top: 24,
                height: "auto",
                width: Ti.Platform.displayCaps.platformWidth,
            });

            const body = Ti.UI.createLabel({
                text: story.body,
                top: 224,
                left: 5,
                fontSize: 12,
            });
            
            storyView.add(title);
            storyView.add(image);
            storyView.add(body);
        
            this.view.add(storyView);
            this.offset += 251;
        });
    }
}
module.exports = Feed;