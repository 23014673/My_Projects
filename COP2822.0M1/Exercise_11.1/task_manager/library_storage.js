/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 3/24/2024
    ASSIGNMENT: Exercise 11.1 - Enhance the Task Manager Application
*/

"use strict";
var storagePrototype = {
    get: function() {
        var str = localStorage.getItem(this.key) || "";
        return (str === "")? []: str.split("|");
    },
    set:function(arr) {
        if (Array.isArray(arr)) {
            var str = arr.join("|"); 
            localStorage.setItem(this.key, str);
        }
    },
    clear: function() {
        localStorage.setItem(this.key, "");
    }
};
var getTaskStorage = function(key) {
    var storage = Object.create(storagePrototype);
    storage.key = key;
    return storage;
};
