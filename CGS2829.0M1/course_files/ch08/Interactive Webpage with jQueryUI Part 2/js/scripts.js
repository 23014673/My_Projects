/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 10/10/2024
Assignment: Exercise 8: Interactive Webpage with jQuery UI Part 2
*/

$(function() {

    var step = 0;

    var maxStep = 10;

    $("#folkMusic").accordion({
        header: "h3",               // Apply 'header' "h3" to tell the accordion where the sections are
        
        collapsible: true,          // Set 'collapsible' to true
        
        active: 0,                  // Set the 'active' to 0 to display the opening screen

                                    // Add an open and close icon using the jQuery UI icons.  
        
        icons: { "header": "ui-icon-circle-arrow-e", "activeHeader": "ui-icon-circle-arrow-s" },
        
        animate: 2000,              // Set the animation time to be 2000 milliseconds for accordion opening and closing
        
        heightStyle: "content"      // Set the 'heightStyle' so that the accordion is only as tall as its content
    });

    $("#slider").slider({
        min: 49,            // A minimum value of 49

        max: 189,           // A maximum value of 189
        
        value: 69,          // An initial value of 69 is shown when the page is opened
        
        step: 20,           // A step value of 20
        
        animate: 3000,      // The animation speed is set to '3000' (milliseconds, or 3 seconds)
        
        range: "min",       // The range is set to "min" (range: "min) so that the background colors appear

        create: function() {
            $(this).css({
                'background': 'linear-gradient(to right, #dfe3ee, #8b9dc3)'
            });

            $("#slider-value").text($(this).slider("value"));
        },

        slide: function(event, ui) {
            $("#slider-value").text(ui.value);
        }
    });

    $("#progressbar").progressbar({
        max: 120,                       // A minimum value of 0 + A maximum value of 120

        value: step * 12,               // The progress bar covers 10 steps 

        create: function() {
            $(this).css({
                'background': 'linear-gradient(to right, #dfe3ee, #8b9dc3)', 'border': '1.5px solid black', 'height': '30px',
            });
        }
    });

    function updateProgressBar() {                                  // Program the '-' and '+' buttons to move the progress bar incrementally by step
        $("#progressbar").progressbar("value", step * 12);

        $("#steps").text(step);
        
        $("#total").text(maxStep);
    }

    $("#plus-button").click(function() {

        if (step < maxStep) {
            step++;

            updateProgressBar();
        }
    });

    $("#minus-button").click(function() {

        if (step > 0) {
            step--;

            updateProgressBar();
        }
    });

    updateProgressBar();

    $("#datepicker").datepicker({
        showOn: "button",                                               // Set the 'showOn' to 'button'

        buttonImage: "images/calendar.gif",                             // Use the 'calendar.gif' image as the buttonImage
        
        showWeek: true,                                                 // Show the week of the year using 'showWeek'
        
        dayNamesMin: ["AA", "BB", "CC", "DD", "EE", "FF", "GG"],        // Use 'dayNamesMin' to change the names of the days of the week to: AA, BB, CC, DD, EE, FF, GG
        
        beforeShowDay: $.datepicker.noWeekends                          // Use 'beforeShowDay' to disable weekend days (noWeekends)
    });

    $("#select").selectmenu({
        icons: { button: "ui-icon-carat-1-e" },                         // Use icons to set a button icon
        
        position: { my: "left top", at: "right top" },                  // Use 'position' to make the pull-down menu appear to the right of the control
        
        width: 200                                                      // Set the width of the select to 200px
    });
});