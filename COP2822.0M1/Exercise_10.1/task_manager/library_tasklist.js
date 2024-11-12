/*
Author: Hannah Bauer
Course: COP2822.0M1
Date: 3/16/2024
Assignment: Exercise 10: Enhance the Task Manager application
*/

"use strict";
var sortTaskList = function(tasks) {
    var isArray = Array.isArray(tasks);
    if (isArray) {
        tasks.sort();
    }
    return isArray;
};

var displaySortedTaskList = function(tasks, div, handler) {
    var html = "";
    var isArray = sortTaskList(tasks);
    
    if (isArray) {
        for (var i in tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' id='delete_", i, "'>Delete</a>");
            html = html.concat("<a href='#' id='edit_", i, "'>Edit</a>");
            html = html.concat(tasks[i]);
            html = html.concat("</p>");
        }
        div.innerHTML = html;
        
        // get links, loop and add onclick event handler
        var deleteLinks = div.querySelectorAll("[id^='delete_']");
        var editLinks = div.querySelectorAll("[id^='edit_']");
        
        for (var i = 0; i < deleteLinks.length; i++) {
            deleteLinks[i].onclick = handler;
        }
        
        for (var i = 0; i < editLinks.length; i++) {
            editLinks[i].onclick = editTaskListItem;
        }
    } 
};

var deleteTask = function() {                       // DELETE TASK FROM LIST
    var tasks = arguments[0];
    var i = arguments[1];
    
    sortTaskList.call(null, tasks);
    tasks.splice(i, 1);
};

var editTask = function(tasks, i, newText) {        // EDIT TASK LIST FROM 
    var isArray = Array.isArray(tasks);
    if (isArray) {
        tasks[i] = newText;                         // UPDATE TASK
    }
};

var capitalizeTask = function(task) {               // CAPITALIZE FIRST LETTER OF TASK
    var first = task.substring(0,1);
    return first.toUpperCase() + task.substring(1);
};