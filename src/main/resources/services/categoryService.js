var libs = {
    restService: require('/lib/rest'),
    const: require('/lib/const'),
    util: require('/lib/util')
};
exports.getCategory = function () {
    var response = libs.restService.restService(libs.const.api().GET_CATEGORY, "GET");
    if (response && response.status === 200) {
        return JSON.parse(response.body);
    } else {
        return JSON.parse(null);
    }
}
exports.getCategoryById = function (id) {
    var response = libs.restService.restService(libs.const.api().GET_CATEGORY_BY_ID + id, "GET");
    if (response && response.status === 200) {
        return JSON.parse(response.body);
    } else {
        return JSON.parse(null);
    }
}
exports.saveCategory = function (params) {
    var response = libs.restService.restService(libs.const.api().SAVE_CATEGORY, "POST", params)
    if (response && response.status === 200) {
        return JSON.parse(response.body);
    } else {
        return JSON.parse(null);
    }
}
exports.updateCategory = function (id, params) {
    var response = libs.restService.restService(libs.const.api().UPDATE_CATEGORY + id, "PUT", params)
    if (response && response.status === 200) {
        return JSON.parse(response.body);
    } else {
        return JSON.parse(null);
    }
}
exports.deleteCategory = function (id) {
    var response = libs.restService.restService(libs.const.api().DELETE_CATEGORY + id, "DELETE")
    if (response && response.status === 200) {
        return JSON.parse(response.body);
    } else {
        return JSON.parse(null);
    }
}