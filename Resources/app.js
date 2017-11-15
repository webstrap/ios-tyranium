const Feed = require("./views/feed");
const Customer = require('./datasource');

const data = [{
    title:"Braun Hamburg",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 2i 2i",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
}];

var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    exitOnClose: true,
    fullscreen: false,
    title: 'Styla Magazine',
    width: "100%",
  });

/** const label = Ti.UI.createLabel({
    color: '#111',
    font: { 
        fontSize:48,
        fontWeight: 'bold',
        fontFamily: "GillSans",
    },
    shadowColor: '#aaa',
    shadowOffset: {x:1, y:1},
    shadowRadius: 3,
    text: 'Braun Hamburg Magazine',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: 30,
    width: Ti.UI.SIZE, height: Ti.UI.SIZE
  });
*/

const feed = new Feed();

win.add(feed.view);

const screenWidth = Ti.Platform.displayCaps.platformWidth;
const image = Ti.UI.createImageView({
    image:'/assets/images/braunhamburg.png',
    top: 0,
    left: 0,
    height: 170,
    width: screenWidth,
});

win.add(image);

win.open();

(new Customer('braunhamburg')).getFeed(10).then(data => {
    feed.addStories(data.stories.map(datum => {
        const candidates = Object.keys(data.images).map(item =>
            data.images[item]
        )
        .filter(item => (item && item.id === datum.images[0].id));

        const candidate = candidates && candidates.shift();
        const fileName = candidate && candidate.fileName;

        return {
            title: datum.title,
            body: datum.configuration.metaDescription,
            image: fileName
        }
    }));
}).catch(e => console.log(e))