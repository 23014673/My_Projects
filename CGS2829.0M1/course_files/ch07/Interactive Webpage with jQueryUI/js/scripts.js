/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 10/3/2024
Assignment: Exercise 7: Interactive Webpage with jQuery UI
*/

$(document).ready(function() {
    // Initialize jQuery UI Tabs
    $("#tabs").tabs();

    // Initialize the Dialog Box
    $("#dialog").dialog({
        autoOpen: false
    });

    // Button to Open the Dialog Box
    $("#openDialog").click(function() {
        $("#dialog").dialog("open");
    });

    // Auto-open Modal on Page Load
    $("#modal").dialog({
        autoOpen: true,
        modal: true,
        buttons: {
            "Close": function() {
                $(this).dialog("close");
            }
        }
    });
});