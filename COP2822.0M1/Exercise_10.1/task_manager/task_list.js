/*
Author: Hannah Bauer
Course: COP2822.0M1
Date: 3/16/2024
Assignment: Exercise 10: Enhance the Task Manager application
*/

"use strict";
var $ = function(id) { return document.getElementById(id); };

var tasks = [];

var displayTaskList = function() {
    if (tasks.length === 0) { // GET TASKS FROM STORAGE
        tasks = getStorage("tasks_10");
    }

    displaySortedTaskList(tasks, $("tasks"), deleteFromTaskList); // DISPLAY SORTED TASKS WITH DELETE LINKS
    $("task").focus();  // SET FOCUS ON TEXT BOX
};

var addToTaskList = function() {    // FUNCTION: ADD TASK TO LIST
    var task = $("task");
    if (task.value === "") {        // DISPLAY ALERT WHEN NOTHING IS ENTERED
        alert("Please enter a task.");
    } else {
        tasks.push(capitalizeTask(task.value)); // ADD CAPITALIZATION FOR FIRST LETTER OF USER INPUT
        setStorage("tasks_10", tasks);

        task.value = "";
        displayTaskList();
    }
};

var deleteFromTaskList = function() {    // FUNCTION: DELETE TASK TO LIST
    deleteTask(tasks, this.id);
    setStorage("tasks_10", tasks);
    
    displayTaskList();
};

var editTaskListItem = function() {             // FUNCTION: EDIT TASK FROM LIST
    var newText = prompt("Please enter new text", tasks[this.title]);
    if (newText) {
        editTask(tasks, this.title, newText);  // UPDATE EDITED TASK IN THE ARRAY
        setStorage("tasks_10", tasks);
        
        displayTaskList();
    }
};

var clearTaskList = function() {    // FUNCTION: CLEAR ALL TASK FROM LIST
    tasks.length = 0;               // EMPTY TASK LIST
    clearStorage("tasks_10");
    $("tasks").innerHTML = "";
    $("task").focus();
};

window.onload = function() {        // DISPLAY TASK LIST
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    displayTaskList();
};