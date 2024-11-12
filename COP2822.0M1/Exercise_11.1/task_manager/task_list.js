/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 3/24/2024
    ASSIGNMENT: Exercise 11.1 - Enhance the Task Manager Application
*/

"use strict";
var $ = function(id) { return document.getElementById(id); };

var addToTaskList = function() { 
    var taskTextbox = $("task");
    // var newTask = new Task(taskTextbox.value);
    var newTask = getTask(taskTextbox.value); // NEW FACTORY FUNCTION
    if (newTask.isValid()) {
        tasklist.add(newTask).save().display(); 
        taskTextbox.value = "";        
    } else {
        alert("PLEASE ENTER A TASK");
    }
    taskTextbox.focus();
};

var clearTaskList = function() {
    tasklist.clear().display(); // NEW CHAINING METHODS
    $("task").focus();
};

var deleteFromTaskList = function() {
    tasklist.delete(this.title).save().display(); // NEW CHAINING METHODS
    $("task").focus();
};

var editTaskListItem = function() { // ADD NEW FUNCTION
    var index = this.title; // GET THE INDEX FROM WHEN USER CLICKED LINK
    var oldTaskText = tasklist.tasks[index];
    var editedTaskText = prompt("Edit Task:", oldTaskText);

    if (editedTaskText !== null) { // CHECK FOR IF USER CANCEL PROMPTS
        var editedTask = getTask(editedTaskText);
        if (editedTask.isValid()) {
            tasklist.edit(index, editedTask).save().display(); // NEW CHAINING METHODS
            $("task").focus();
        } else {
            alert("Please enter a valid task.");
        }
    }
};

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    
    tasklist.displayDiv = $("tasks");
    tasklist.deleteClickHandler = deleteFromTaskList;
    tasklist.editClickHandler = editTaskListItem; // Add a statement that sets the variable for the click event handler for the Edit links to the function
    
    tasklist.load().display(); // CODE FOR NEW CHAINING METHODS
    
    $("task").focus();
};