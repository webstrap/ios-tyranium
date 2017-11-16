const Feed = require("./src/views/feed");

const win = Ti.UI.createWindow({
    backgroundColor: 'white',
    exitOnClose: true,
    fullscreen: false,
    width: "100%",
  });
const mainWin = Titanium.UI.iOS.createNavigationWindow({
    window: win
 });
// BRAUN HAMBURG HEADER LOGO
const screenWidth = Ti.Platform.displayCaps.platformWidth;
const headLogo = Ti.UI.createImageView({
    image:'/assets/images/braunhamburg.png',
    top: 0,
    left: 0,
    height: 170,
    width: screenWidth,
});
win.add(headLogo);

const feed = new Feed(mainWin);
win.add(feed.view);


mainWin.open();