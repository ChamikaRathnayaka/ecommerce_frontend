var libs = {
    util: require('/lib/util'),
    client: require('/lib/http-client'),
};
exports.restService = function (url, method, params) {
    let response = null;
    try {
        if (method === "GET") {
            response = get(url, method);
        } else if (method === "POST") {
            response = post(url, method, params);
        } else if (method === "PUT") {
            response = put(url, method, params)
        } else if (method === "DELETE") {
            response = deleteData(url, method)
        }
        return response;
    } catch (e) {
        libs.util.log(e);
    }
}

function get(url, method) {
    var response = libs.client.request({
        url: 'http://localhost:5001/api/eCommerce/' + url,
        method: method,
        connectionTimeout: 20000,
        readTimeout: 5000,
        contentType: 'application/json'
    });
    return response;
}

function post(url, method, params) {
    var response = libs.client.request({
        url: 'http://localhost:5001/api/eCommerce/' + url,
        method: method,
        connectionTimeout: 100000,
        readTimeout: 100000,
        body: JSON.stringify(params),
        contentType: 'application/json'
    });
    return response;
}

function put(url, method, params) {
    var response = libs.client.request({
        url: 'http://localhost:5001/api/eCommerce/' + url,
        method: method,
        connectionTimeout: 100000,
        readTimeout: 100000,
        body: JSON.stringify(params),
        contentType: 'application/json'
    });
    return response;
}

function deleteData(url, method) {
    var response = libs.client.request({
        url: 'http://localhost:5001/api/eCommerce/' + url,
        method: method,
        connectionTimeout: 100000,
        readTimeout: 100000,
        contentType: 'application/json'
    });
    return response;
}

