"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.tasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        return this.tasks.length;
    };
    toDoClass.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item " + task + "has been deleted");
        }
        else {
            console.log("Item not found: " + task);
        }
        return this.tasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("item1");
testClass.addTask("item2");
testClass.addTask("item3");
testClass.listAllTasks();
testClass.deleteTask("item2");
testClass.listAllTasks();
