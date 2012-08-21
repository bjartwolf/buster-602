var MYAPP = MYAPP || {};
(function () {
    "use strict";
    MYAPP.services = MYAPP.services || {};
    MYAPP.services.load = function (callback) {
        callback([new Task({'title': 'testtitle', 'isDone': false})]);
    };
    MYAPP.services.save = function (data, callback) {
        callback("saved data: " + data);
    };
}());
