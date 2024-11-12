/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 3/3/2024
    ASSIGNMENT: Exercise 9.1 - Enhance the Task Manager Application
*/

"use strict";
var $ = function(id) { return document.getElementById(id); };

var tasks = [];
var sortDirection = "ASC";

var displayTaskList = function() {
    var list = "";
    if (tasks.length === 0) { 
        var storage = localStorage.getItem("tasks") || "";
        if (storage.length > 0) { tasks = storage.split("|"); }
    }

    if (sortDirection === "ASC") {
        tasks.sort();       // SORT TASKS BY LETTER
    } else {                // REVERSE TASKS
        tasks.reverse();
    }

    var name = sessionStorage.getItem("name") || "";
    $("name").textContent = name ? name + "'s" : "";

    if (tasks.length > 0) {     
        list = tasks.join("\n");
    }
    
    $("task_list").value = list;
    $("task").focus();
}

var addToTaskList = function() {   
    var task = $("task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {  
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");
        task.value = "";
        displayTaskList();
    }
}

var clearTaskList = function() {
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
}

var deleteTask = function() {
                                            // PROMPT USER TO ENTER THE INDEX NUMBER OF TASK TO DELETE
    var indexString = prompt("Please enter the index number of the task you would like to delete: ");
    var index = parseInt(indexString);      // STRING -> INTEGER

                            // CHECK IF USER ENTRY IS VALID
    if (!isNaN(index) && index >= 0 && index < tasks.length) {
                            // IF USER ENTRY IS VALID - REMOVE TASK EQUAL TO THE INDEX NUMBER USING SPLICE
        tasks.splice(index, 1);
                            // CREATE NEW STRING FROM UPDATED TASKS USING @pipe separator
        var updatedTasksString = tasks.join("|");
                            // UPDATE @localStorage
        localStorage.setItem("tasks", updatedTasksString);
        displayTaskList();  // RE-DISPLAY ALL TASKS ON PAGE
    }
}

var toggleSort = function() {
    sortDirection = sortDirection === "ASC" ? "DESC" : "ASC";   // TOGGLE TASKS BETWEEN "ASC" and "DESC"
    displayTaskList();                                          // RE-DISPLAY ALL TASKS ON PAGE
}

var setName = function() {
    var name = prompt("Please enter your name: ");    // PROMPT TO ASK USER FOR NAME   
    sessionStorage.setItem("name", name);             // STORE THE NAME IN @session storage
    displayTaskList();                                // RE-DISPLAY ALL TASKS ON PAGE
}

var filterTasks = function() {
    var filtered = tasks.filter(importantTasks);    // FILTER TASKS BASED ON @importantTasks FUNCTION
    var filteredString = filtered.join("\n");
    $("task_list").value = filteredString;
}

var importantTasks = function(element) {
    var lower = element.toLowerCase();          // CONVERT INPUT TO LOWERCASE
    var index = lower.indexOf("important!");    // CHECK IF "important!" EXISTS
    return index > -1;
}

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    $("delete_task").onclick = deleteTask;
    $("toggle_sort").onclick = toggleSort;
    $("set_name").onclick = setName;
    $("filter_tasks").onclick = filterTasks;
    displayTaskList();
}