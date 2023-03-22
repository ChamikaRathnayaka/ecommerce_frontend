var portal = require('/lib/xp/portal'); // Import the portal library
var thymeleaf = require('/lib/thymeleaf'); // Import the Thymeleaf library

//get
exports.get = function(req) {

    var view = resolve('productcategory.html');

    return {
        body: thymeleaf.render(view)
    };
};
