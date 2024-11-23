"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    // Initialize the tabs
    $("#tabs").tabs();

    // Initialize the datepicker
    $("#arrival_date").datepicker({
        maxDate: "+90D" // allow up to 90 days in the future
    });

    // Open the dialog when the page loads
    $("#dialog").dialog({
        autoOpen: true,
        modal: true,
        closeOnEscape: true,
        draggable: false,
        resizable: false
    });

    // Move the focus to the first text box
    $("#arrival_date").focus();

    // Handler for the "View Cancellation Policies" button
    $("#policies").click(() => {
        $("#dialog").dialog("open");
    });

    // The handler for the submit event of the form
    $("#reservation_form").submit(evt => {
        let isValid = true;

        // Validate the requested arrival date
        const arrivalDate = $("#arrival_date").val().trim();
        if (arrivalDate == "") {
            $("#arrival_date").next().text("This field is required.");
            isValid = false;
        } else {
            $("#arrival_date").next().text("");             
        }
        $("#arrival_date").val(arrivalDate);

        // Validate the number of nights
        const nights = $("#nights").val().trim();
        if (nights == "") {
            $("#nights").next().text("This field is required.");
            isValid = false;
        } else if (isNaN(nights)) {
            $("#nights").next().text("Must be numeric.");
            isValid = false;
        } else {
            $("#nights").next().text("");
        }
        $("#nights").val(nights);       

        // Validate the name entry
        const name = $("#name").val().trim();
        if (name == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }
        $("#name").val(name);
                    
        // Validate the email entry with a regular expression
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email); 
        
        // Validate the phone number
        const phone = $("#phone").val().trim();
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false; 
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);
        
        // Prevent the submission of the form if any entries are invalid 
        if (!isValid) {
            evt.preventDefault();               
        }
    });
});
