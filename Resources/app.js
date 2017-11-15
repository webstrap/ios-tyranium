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
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
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
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
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
},{
    title:"Braun Hamburg 3",
    body: "Cool Magazine"
},{
    title:"Braun Hamburg 3",
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

var scrollView = Ti.UI.createScrollView({top:50});

data.forEach(function (datum, pos) {
    const view = Titanium.UI.createView({
        top: 51 * pos,
        height: 51,
    });

    view.addEventListener("click", function(){
        view.backgroundColor = "#333";
        setTimeout(function(){view.backgroundColor = "#FFF";}, 100);
    });

    const title = Ti.UI.createLabel({
        text: datum.title,
        top: 5,
        left: 5,
        fontSize: 14,
    });

    const body = Ti.UI.createLabel({
        text: datum.body,
        top: 24,
        left: 5,
        fontSize: 12,
    });
    
    view.add(title);
    view.add(body);

    scrollView.add(view);
});
const Feed = require("./views/feed");
win.add(scrollView);
win.open();