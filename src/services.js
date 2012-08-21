var MYAPP = MYAPP || {};
(function () {
    MYAPP.services = MYAPP.services || {};
    MYAPP.services.load = function (callback) {
        $.getJSON("http://localhost:1337/tasks", function(allData) {
        var mappedTasks = $.map(allData, function(item) { return new Task(item) });
        callback(mappedTasks);
        });    
    };
    MYAPP.services.save = function (data, callback) {
        $.ajax("http://localhost:1337/tasks", {
            data: ko.toJSON(data),
            type: "post", contentType: "application/json",
            success: function(result) { callback(result) }
        });
    };
}());
