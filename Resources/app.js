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
    title: 'Styla Magazine'
  });

const label = Ti.UI.createLabel({
    color: '#900',
    font: { fontSize:48 },
    shadowColor: '#aaa',
    shadowOffset: {x:5, y:5},
    shadowRadius: 3,
    text: 'Styla Magazine',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: 30,
    width: Ti.UI.SIZE, height: Ti.UI.SIZE
  });
const Feed = require("./views/feed");
const feed = new Feed();
feed.addStories(data);
feed.addStories(data);
feed.addStories(data);
feed.addStories(data);
win.add(label);
win.add(feed.view);
win.open();