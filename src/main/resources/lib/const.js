exports.api = function () {
    const values = {
        GET_CATEGORY: "get/productCategories",
        GET_PRODUCT: "get/allProducts",
        GET_CATEGORY_BY_ID: "get/productCategoryById/",
        SAVE_CATEGORY: "save/productCategory",
        UPDATE_CATEGORY: "update/productCategory/",
        DELETE_CATEGORY: "delete/productCategory/"
    }
    Object.freeze(values);
    return values;
}
