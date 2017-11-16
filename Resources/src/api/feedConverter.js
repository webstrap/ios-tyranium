const Image = require("./image");

function feedConverter(feed) {
    return feed.map(convertFeedStory);
}

function convertFeedStory(story){
    if( !story || !story.sections ) { return story; };
    
        const result = {};
        result.title    = story.sections.header 
                        && story.sections.header.content;
    
        result.body     = story.sections.copy 
                        && story.sections.copy.content;
    
        result.products = story.sections.product 
                        && story.sections.product.products 
                        && story.sections.product.products.map(image => new Image(image));
    
        result.images   = story.sections.visuals 
                        && story.sections.visuals.images 
                        && story.sections.visuals.images.map( image => new Image(image));
                        
        result.categories = story.categories;
        result.slug = story.slug;
        return result;
}

module.exports = feedConverter;