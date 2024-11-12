/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 4/08/2024
    ASSIGNMENT: Exercise 13.2 - Enhance The Slide Show Application
*/

"use strict";
var evt = {
    attach: function(node, eventName, func) {
        if (node.addEventListener) {
            node.addEventListener(eventName, func);
        } else if (node.attachEvent) {
            node.attachEvent("on" + eventName, func);
        }
    },
    detach: function(node, eventName, func) {
        if (node.removeEventListener) {
            node.removeEventListener(eventName, func);
        } else if (node.detachEvent) {
            node.detachEvent("on" + eventName, func);
        }
    },
    preventDefault: function(e) {
        e = e || window.event;
        if ( e.preventDefault ) { e.preventDefault(); }
        else { e.returnValue = false; }
    }
};