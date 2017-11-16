const Feed = require("./src/views/feed");

var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    exitOnClose: true,
    fullscreen: false,
    title: 'Styla Magazine',
    width: "100%",
  });

const mainWin = Titanium.UI.iOS.createNavigationWindow({
    window: win
 });

// BRAUN HAMBURG HEADER LOGO
const screenWidth = Ti.Platform.displayCaps.platformWidth;
const image = Ti.UI.createImageView({
    image:'/assets/images/braunhamburg.png',
    top: 0,
    left: 0,
    height: 170,
    width: screenWidth,
});
win.add(image);

const feed = new Feed(mainWin);
win.add(feed.view);
mainWin.add(win);

mainWin.open();