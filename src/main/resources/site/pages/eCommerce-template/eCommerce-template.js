var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.get = function (req) {
    var content = portal.getContent();
    var model = {
        mainRegion: content.page.regions.main
    }
    var view = resolve('eCommerce-template.html');

    return {
        body: thymeleaf.render(view, model)
    };
};