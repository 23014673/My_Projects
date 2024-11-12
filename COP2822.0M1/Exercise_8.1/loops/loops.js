/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 2/25/2024
    ASSIGNMENT: Exercise 8.1 - Work with loops and prime numbers
*/

"use strict";
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random();                 //VALUE >= 0.0 and < 1.0
        random = Math.floor(random * max);      //VALUE IS AN INTEGER BETWEEN 0 AND MAX -1
        random = random + 1;                    //VALUE IS AN INTEGER BETWEEN 1 AND MAX
    }
    return random;
};

var averageRolls = function() {                 // AVERAGE ROLLS FOR A 6
    var total = 0;
    var count = 0;
    var max = -Infinity;
    var rolls;
    
    for (var count = 0; count < 10000; count++) {
        rolls = 1;
        do {
            rolls++;
        } while (getRandomNumber(6) !== 6);
        total += rolls;
        if (rolls > max) max = rolls;
    }
    var average = total / count;
    alert("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
};


var displayFactors = function() {               // DISPLAY FACTORS
    var number = $("number").value;
    var factors = "";
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            factors += i + " ";
        }
    }
    alert("Factors of ".concat(number, ": ", factors));
};


var isPrime = function(number) {                // CODE TAKEN FROM THE determineIfPrime METHOD
    for (var i = 2; i < number; i++) {          // receives a number and returns the number if it is prime or 0 if it isn’t
        if (number % i === 0) return false;
    }
    return true;
};

// CREATE A getPrimeNumbers FUNCTION THAT: GETS ALL THE PRIME NUMBERS BETWEEN 1 AND THE NUMBER THAT THE USER ENTERS
var getPrimeNumbers = function() {
    var number = parseInt($("number").value);
    var primeCount = 0;
    var primeNumbers = "";

    for (var i = 2; i <= number; i++) {
        if (isPrime(i)) {
            primeNumbers += i + " ";
            primeCount++;
        }
    }

    $("count").value = primeCount;
    $("primes").value = primeNumbers;
};

var processEntries = function() {
    // averageRolls();
    displayFactors();
    getPrimeNumbers();                          // CHANGED TO CALL THE: getPrimeNumbers FUNCTION
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("number").focus();
};