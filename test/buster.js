config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "browser",
    libs: [
        "lib/knockout-2.1.0.js",
        "lib/jquery-1.8.0.min.js"
    ],
    sources: [
        "src/services-stub.js",
        "src/ViewModel.js"
    ],
    tests: [
        "test/*-test.js"
    ],
    extensions: [require("buster-lint")],
    "buster-lint": {
    linterOptions: {
            maxlen:150,
            jquery:true,
            vars:true,
            nomen:true,
            node:true,
            predef: [
                "buster",
                "refute",
                "assert",
                "Task",
                "MYAPP",
                "ko",
                "TaskListViewModel",
            ]
        },
    excludes: [
            "jquery",
            "knockout",
            "sinon"]
}
}
