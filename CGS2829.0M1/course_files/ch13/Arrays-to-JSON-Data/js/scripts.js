/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 11/13/2024
Assignment: Exercise 13: Arrays to JSON Data
*/

function populateArray() {
    let userArray = [];

    // hold 8 to 12 elements using a prompt box
    for (let i = 0; i < 12; i++) {
        const input = prompt(`Enter item ${i + 1} for the array (8 to 12 items total):`);
        
        if (input) userArray.push(input);

        if (userArray.length >= 8) {
            const addMore = confirm("You have added 8 items. Do you want to add more?");
            if (!addMore) break;
        }
    }

    // convert the JavaScript array to JSON notation
    const jsonFormattedText = JSON.stringify(userArray, null, 2);

    // printed on to the surface of the web page
    document.getElementById('jsonOutput').textContent = jsonFormattedText;

    document.querySelector('button[onclick="populateArray()"]').disabled = true;

    document.getElementById('restartButton').disabled = false;
}

function restartPage() {

    document.getElementById('jsonOutput').innerHTML = "";

    document.querySelector('button[onclick="populateArray()"]').disabled = false;

    document.getElementById('restartButton').disabled = true;
}
