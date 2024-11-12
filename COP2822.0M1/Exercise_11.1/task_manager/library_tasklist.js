/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 3/24/2024
    ASSIGNMENT: Exercise 11.1 - Enhance the Task Manager Application
*/

"use strict";

var tasklist = {
    tasks: [],
    storage: getTaskStorage("tasks_11_1"),
    displayDiv: null,
    deleteClickHandler: null,
    editClickHandler: null, // Add a variable to the task list object that will hold the click event handler for the Edit links.

    load: function() {
        if (this.tasks.length === 0) {
            tasklist.tasks = this.storage.get();
        }
    },
    save: function() {
        this.storage.set(this.tasks);
        return this; // NEW CHAINING METHOD
    },
    sort: function() {
        this.tasks.sort();
        return this; // NEW CHAINING METHOD
    },
    add: function(task) {
        this.tasks.push(task.toString());
        return this; // NEW CHAINING METHOD
    },
    delete: function(i) {
        this.sort();
        this.tasks.splice(i, 1);
        return this; // NEW CHAINING METHOD
    },
    clear: function() {
        this.tasks.length = 0;
        this.storage.clear();
        this.displayDiv.innerHTML = "";
        return this; // NEW CHAINING METHOD
    },
    display: function() {
        var html = "";
        this.sort();

        // create and load html string from sorted array
        for (var i in this.tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' title='", i, "'>Delete</a>");
            html = html.concat("<a href='#' title='", i, "'>Edit</a>"); // Step 1
            html = html.concat(this.tasks[i]);
            html = html.concat("</p>");
        }
        this.displayDiv.innerHTML = html;

        // get links, loop and add onclick event handler
        var links = this.displayDiv.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            if (links[i].innerHTML === "Delete") {
                links[i].onclick = this.deleteClickHandler;
            } else {
                links[i].onclick = this.editClickHandler;
            }
        }
        return this; // NEW CHAINING METHOD
    },
    edit: function(index, newTask) { // Add an edit method that receives the index of the task being edited and the Task object that will replace the current task at that index
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index] = newTask.toString().charAt(0).toUpperCase() + newTask.toString().slice(1);
        }
        return this; // NEW CHAINING METHOD
    }
};