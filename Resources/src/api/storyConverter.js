const Image = require("./image");
const removeHtmlRegEx = /(<([^>]+)>)/ig;

function storyConverter(story) {
    const result = {};
    result.title    = story.title;
    console.log(story.introText);
    result.introText = story.introText.content.replace(removeHtmlRegEx, "");
    result.images = [];
    result.products = [];
    result.body = "";
    if (story.leadImage) {
        result.images.push(new Image(story.leadImage));
    }
    story.elements.forEach(element => {
        console.log(element.type);
        if(element.type == "image"){
            result.images.push(new Image(element));
        }
        if(element.type == "products" && element.products.length){
            element.products.forEach(product => {
                const productImage = new Image(product);
                result.products.push(productImage);
            })
        }
        if(element.type == "paragraph" && !result.body){
            result.body = element.content.replace(removeHtmlRegEx, "");
        }
    });
    result.categories = story.categories;
    return result;
}

module.exports = storyConverter;