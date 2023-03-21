$(document).ready(function () {
    check();
})
$('#product-category-submit').on('click', function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var code = $('#code').val();
    if ($('#category-form').valid()) {
        $.ajax({
            type: 'POST',
            url: categoryURL,
            data: {name, code, action: "add"},
            timeout: 50000,
            success: function (response) {
                response = JSON.parse(response)
                if (response.status === "OK") {
                    $('#messageModal').modal('show')
                    $('#modalBody').css('background-color', 'green');
                    $('#message').text(response.message)
                    $('#name').val('');
                    $('#code').val('');
                    setTimeout(function () {
                        $('#messageModal').modal('hide');
                        location.reload();
                    }, 1500);
                } else if (response.status === "BAD_REQUEST") {
                    $('#messageModal').modal('show')
                    $('#modalBody').css('background-color', 'red');
                    $('#message').text(response.message)
                    setTimeout(function () {
                        $('#messageModal').modal('hide');
                    }, 5000);
                }
            }, error: function (response) {
                $('#messageModal').modal('show')
                $('#modalBody').css('background-color', 'red');
                $('#message').text("error: " + response)
                setTimeout(function () {
                    $('#messageModal').modal('hide');
                }, 3000);
            }
        })
    }
})

function check() {
    $.validator.addMethod("specialCharacter", function (value, element) {
        return this.optional(element) || (/^[a-zA-Z0-9_]+$/.test(value));
    }, jQuery.validator.format("Cannot add any special character in the name field"));
    $.validator.addMethod("characterUse", function (value, element) {
        return this.optional(element) || (/^[a-zA-Z0-9]+[\/\- ]?[a-zA-Z0-9]+$/.test(value));
    }, jQuery.validator.format("Cannot add any Special character in first letter and end letter"));

    $("#category-form").validate({
        rules: {
            name: {
                required: true,
                specialCharacter: true,
                minlength: 4,
                maxlength: 10
            },
            code: {
                required: true,
                characterUse: true,
                minlength: 3,
                maxlength: 10
            }
        },
        messages: {
            name: {
                required: "Category Name field is required",
                minlength: jQuery.validator.format("At least 4 characters required!"),
                maxlength: jQuery.validator.format("Maximum 10 characters allowed!")
            },
            code: {
                required: "Category Code field is required",
                minlength: jQuery.validator.format("At least 3 characters required!"),
                maxlength: jQuery.validator.format("Maximum 10 characters allowed!")
            }
        }
    });
    $("#product-update-form").validate({
        rules: {
            nameUpdate: {
                required: true,
                specialCharacter: true,
                minlength: 4,
                maxlength: 10
            },
            codeUpdate: {
                required: true,
                characterUse: true,
                minlength: 3,
                maxlength: 10
            }
        },
        messages: {
            nameUpdate: {
                required: "Need to Add Category Name",
                minlength: jQuery.validator.format("At least 4 characters required!"),
                maxlength: jQuery.validator.format("Maximum 10 characters allowed!")
            },
            codeUpdate: {
                required: "Need to fill field code",
                minlength: jQuery.validator.format("At least 3 characters required!"),
                maxlength: jQuery.validator.format("Maximum 10 characters allowed!")
            }
        }
    });
}

//use to convert "{id=1,name=code}" string object to javascript object
function parseStringObject(str) {
    var obj = {};
    var keyValuePairs = str.substring(1, str.length - 1).split(", ");
    for (var i = 0; i < keyValuePairs.length; i++) {
        var keyValue = keyValuePairs[i].split("=");
        obj[keyValue[0]] = keyValue[1];
    }
    return obj;
}

function setValue(category) {
    var object = parseStringObject(category.getAttribute('data-object'));
    $('#updateId').val(object.id);
    $('#nameUpdate').val(object.name);
    $('#codeUpdate').val(object.code);
}

$('#product-update-submit').on('click', function (e) {
    e.preventDefault();
    var name = $('#nameUpdate').val();
    var code = $('#codeUpdate').val();
    var id = $('#updateId').val();
    if ($('#product-update-form').valid()) {
        $.ajax({
            type: 'POST',
            url: categoryURL,
            data: {name, code, id, action: "update"},
            timeout: 50000,
            success: function (response) {
                response = JSON.parse(response)
                if (response.status === "OK") {
                    $('#productCatModal').modal('hide')
                    $('#messageModal').modal('show')
                    $('#modalBody').css('background-color', 'green');
                    $('#message').text(response.message)
                    $('#nameName').val('');
                    $('#codeName').val('');
                    setTimeout(function () {
                        $('#messageModal').modal('hide');
                        location.reload();
                    }, 1500);
                } else if (response.status === "BAD_REQUEST") {
                    $('#messageModal').modal('show')
                    $('#modalBody').css('background-color', 'red');
                    $('#message').text(response.message)
                    setTimeout(function () {
                        $('#messageModal').modal('hide');
                    }, 5000);
                }
            }, error: function (response) {
                $('#messageModal').modal('show')
                $('#modalBody').css('background-color', 'red');
                $('#message').text("error: " + response)
                setTimeout(function () {
                    $('#messageModal').modal('hide');
                }, 3000);
            }
        })
    }
})

function deleteCategory(category) {
    var object = parseStringObject(category.getAttribute('data-object'));
    var id = object.id;
    $.ajax({
        type: 'POST',
        url: categoryURL,
        data: {id, action: "delete"},
        timeout: 50000,
        success: function (response) {
            response = JSON.parse(response)
            if (response.status === "OK") {
                $('#messageModal').modal('show')
                $('#modalBody').css('background-color', 'green');
                $('#message').text(response.message)
                setTimeout(function () {
                    $('#messageModal').modal('hide');
                    location.reload();
                }, 1500);
            } else if (response.status === "BAD_REQUEST") {
                $('#messageModal').modal('show')
                $('#modalBody').css('background-color', 'red');
                $('#message').text(response.message)
                setTimeout(function () {
                    $('#messageModal').modal('hide');
                }, 5000);
            }
        }, error: function (response) {
            $('#messageModal').modal('show')
            $('#modalBody').css('background-color', 'red');
            $('#message').text("error: " + response)
            setTimeout(function () {
                $('#messageModal').modal('hide');
            }, 3000);
        }
    })
}