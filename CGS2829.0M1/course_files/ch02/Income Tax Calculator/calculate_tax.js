/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 9/1/2024
Assignment: Exercise 2: Income Tax Calculator
*/


const calculateTax = taxable_income_amount => {                         //FIXED THIS
    let income_tax = 0;

    // 0 + 10%
    if (taxable_income_amount <= 9875) {
        income_tax = taxable_income_amount * 0.10;
    }
    // 987.50 + 12% of the # over 9875
    else if (taxable_income_amount > 9875 && taxable_income_amount <= 40125) {
        income_tax = 987.50 + (taxable_income_amount - 9875) * 0.12;
    }
    // 4617.50 + 22% of the # over 40125
    else if (taxable_income_amount > 40125 && taxable_income_amount <= 85525) {
        income_tax = 4617.50 + (taxable_income_amount - 40125) * 0.22;
    }
    // 14605.50 + 24% of the # over 85,525
    else if (taxable_income_amount > 85525 && taxable_income_amount <= 163300) {
        income_tax = 14605.50 + (taxable_income_amount - 85525) * 0.24;
    }
    // 33271.50 + 32% of the # over 163300
    else if (taxable_income_amount > 163300 && taxable_income_amount <= 207350) {
        income_tax = 33271.50 + (taxable_income_amount - 163300) * 0.32;
    }
    // 47367.50 + 35% of the # over 207350
    else if (taxable_income_amount > 207350 && taxable_income_amount <= 518400) {
        income_tax = 47367.50 + (taxable_income_amount - 207350) * 0.35;
    }
    // 156,235 + 37% of the # over 518400
    else if (taxable_income_amount > 518400) {
        income_tax = 156235.00 + (taxable_income_amount - 518400) * 0.37;
    }

    return income_tax.toFixed(2);                                           // FIXED THIS
};

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('calculate').addEventListener('click', () => {

        const taxable_income_amount = parseFloat(document.getElementById('income').value); // Calculates the proper values

        if (isNaN(taxable_income_amount) || taxable_income_amount <= 0) {

            alert('Please enter a valid taxable income greater than zero.'); //Helpful error message if income not greater than 0
            return;
        }

        const income_tax = calculateTax(taxable_income_amount); 

        document.getElementById('tax').value = income_tax; // The tax amount is displayed using 2 decimal places
    });
});