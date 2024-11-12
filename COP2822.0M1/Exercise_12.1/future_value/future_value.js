/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 3/29/2024
    ASSIGNMENT: Exercise 12.1 Add Exception Handling to a Future Value Application
*/

var calculateFV = function(investment, rate, years) {
    try {
        var futureValue = investment; // ADDED THE VAR KEYWORD BACK AND ADDED A THROW STATEMENT
        for (var i = 1; i <= years; i++) {
            futureValue += futureValue * rate / 100;
        }
        futureValue = futureValue.toFixed(2);
        if (isNaN(futureValue)) {
            throw new RangeError("Error in Future Value calculation.");
        }
        return futureValue;
    } catch (error) {
        throw error;
        // console.error("Error Name:", error.name);          // COMMENTED OUT CATCH BLOCK
        // console.error("Error Message:", error.message);
    }
};

var processEntries = function() {
    try {
        var investment = parseFloat($("investment").value);
        var rate = parseFloat($("annual_rate").value);
        var years = parseInt($("years").value);
        var allValid = true;

        if (isNaN(investment)) {
            $("investment_error").firstChild.nodeValue = "Must be number";
            allValid = false;
        } else {
            $("investment_error").firstChild.nodeValue = "";
        }
        if (isNaN(rate)) {
            $("rate_error").firstChild.nodeValue = "Must be number";
            allValid = false;
        } else {
            $("rate_error").firstChild.nodeValue = "";
        }
        if (isNaN(years)) {
            $("years_error").firstChild.nodeValue = "Must be number";
            allValid = false;
        } else {
            $("years_error").firstChild.nodeValue = "";
        }
        if (allValid) {
            $("future_value").value = calculateFV(investment, rate, years);
        }
    } catch (error) {
        console.error("Error Name:", error.name);           // ADDED CATCH BLOCK
        console.error("Error Message:", error.message);
    }
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
};

var $ = function(id) {
    return document.getElementById(id);
};