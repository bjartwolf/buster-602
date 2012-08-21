"use strict";
buster.testCase("The ViewModel", {
    "setUp": function () {
        // Spying on existing method
        this.spy(MYAPP.services, 'load');
        this.vm = new TaskListViewModel();
    },
    "load should be called on initialization": function () {
        assert.calledOnce(MYAPP.services.load);
    },
    "should have one element when initialized": function () {
        assert.same(this.vm.tasks().length, 1);
    },
    "should call save when save command is called, but not before": function () {
        // replacing method with spy
        MYAPP.services.save = this.spy();
        refute.calledOnce(MYAPP.services.save);
        this.vm.save();
        assert.calledOnce(MYAPP.services.save);
    },
    "should call save when save command is called 2": function () {
        MYAPP.services.save = this.spy();
        this.vm.save();
        assert.calledOnce(MYAPP.services.save);
    }
});
