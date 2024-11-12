/*
Author: Hannah Bauer
Course: COP2822.0M1
Date: 3/16/2024
Assignment: Exercise 10: Enhance the Task Manager application
*/

"use strict";
var getStorage = function(key) {
    //get string from storage or an empty string if nothing in storage
    var storage = localStorage.getItem(key) || "";
    if (storage === "") { 
        return []; 
    } else {
        return storage.split("|");
    }
};

var setStorage = function(key, arr) {
    if (Array.isArray(arr)) {
        var storageString = arr.join("|"); 
        localStorage.setItem(key, storageString);
    }
};

var clearStorage = function(key) {
    localStorage.setItem(key, "");
};