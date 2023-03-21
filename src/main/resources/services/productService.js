var libs = {
    restService: require('/lib/rest'),
    const: require('/lib/const')
};

exports.getProduct = function () {
    var response = libs.restService.restService(libs.const.api().GET_PRODUCT, "GET");
    if (response && response.status === 200) {
        return JSON.parse(response.body);
    } else {
        return JSON.parse(null);
    }
}