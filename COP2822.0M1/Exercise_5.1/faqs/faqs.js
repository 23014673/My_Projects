/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 2/12/2024
    ASSIGNMENT: Exercise 5.1 - Experiment with the FAQs Application
*/

"use strict";

document.addEventListener("DOMContentLoaded", function() {

    var toggle = function(event) {
        event.preventDefault();
        var a = event.currentTarget;
        var h2 = a.parentElement;
        var div = h2.nextElementSibling;

        /*
        if (a.classList.contains("minus")) {
            a.classList.remove("minus");
        } else {
            a.classList.add("minus");
        }

        if (div.classList.contains("open")) {
            div.classList.remove("open");
        } else {
            div.classList.add("open");
        } */

        if (a.classList.contains("minus")) { 
            a.className = "";
        } else {                // TOGGLE MINUS CLASS
            a.className = "minus";
        }

        if (div.classList.contains("open")) { 
            div.className = "";
        } else {                // TOGGLE OPEN CLASS
            div.className = "open";
        } 
    };

    var aElements = document.querySelectorAll("h2 a");

    for (var i = 0; i < aElements.length; i++) {
        aElements[i].addEventListener("click", toggle);
    }
});