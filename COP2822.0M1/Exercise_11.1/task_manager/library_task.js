/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 3/24/2024
    ASSIGNMENT: Exercise 11.1 - Enhance the Task Manager Application
*/

"use strict";

var taskPrototype = {
    isValid: function() {
        return this.text.trim() !== "";
    },
    toString: function() {
        return this.text.charAt(0).toUpperCase() + this.text.slice(1);
    }
};

var getTask = function(text) {
    var task = Object.create(taskPrototype);
    task.text = text;
    return task;
};