/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 9/11/2024
Assignment: Exercise 4: Five Buttons - Accessing the DOM
*/

function getInputValues() {
    const inputs = document.querySelectorAll('input'); // count the number of inputs
    let values = [];

    // access the values that are in the textboxes by going after the inputs by their element name and their position in the DOM
    for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].value;

        // check to see if a value is a number using !isNaN(value)
        if (!isNaN(value) && value.trim() !== '') {  
            values.push(Number(value));
        }
    }
    return values;
}

// Event listener for SUM calculation
document.getElementById('sum_button').addEventListener('click', function() {
    let values = getInputValues();
    let sum = values.reduce((total, num) => total + num, 0);
    document.getElementById('sum_output').textContent = `${sum.toFixed(2)}`;
});

// Event listener for COUNT calculation
document.getElementById('count_button').addEventListener('click', function() {
    let values = getInputValues();
    let count = values.length;
    document.getElementById('count_output').textContent = `${count.toFixed(2)}`;
});

// Event listener for AVERAGE calculation
document.getElementById('average_button').addEventListener('click', function() {
    let values = getInputValues();
    if (values.length > 0) {
        let sum = values.reduce((total, num) => total + num, 0);
        let average = (sum / values.length).toFixed(2);
        document.getElementById('average_output').textContent = `${average}`;
    } else {
        document.getElementById('average_output').textContent = `N/A`;
    }
});

// Event listener for MINIMUM calculation
document.getElementById('minimum_button').addEventListener('click', function() {
    let values = getInputValues();
    if (values.length > 0) {
        let min = Math.min(...values);
        document.getElementById('minimum_output').textContent = `${min.toFixed(2)}`;
    } else {
        document.getElementById('minimum_output').textContent = `N/A`;
    }
});

// Event listener for MAXIMUM calculation
document.getElementById('maximum_button').addEventListener('click', function() {
    let values = getInputValues();
    if (values.length > 0) {
        let max = Math.max(...values);
        document.getElementById('maximum_output').textContent = `${max.toFixed(2)}`;
    } else {
        document.getElementById('maximum_output').textContent = `N/A`;
    }
});