/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 10/30/2024
Assignment: Exercise 11: Cookies for E-commerce
*/

document.getElementById('order').addEventListener('click', function() {

    const size = document.getElementById('size').value;

    const gender = document.getElementById('gender').value;
    
    const color = document.getElementById('color').value;
    
    const age = document.getElementById('age').value;
    
    const height = document.getElementById('height').value;
    
    const weight = document.getElementById('weight').value;
    
    const prodid = document.getElementById('prodid').value;
    
    const qty = document.getElementById('qty').value;
    
    const price = parseFloat(document.getElementById('price').value);

    if (!validateNumericFields(age, height, weight, qty)) return;

    const quantity = parseInt(qty);

    // input fields are validated to hold an integer greater than 1
    if (quantity > 1) {
        const extendedPrice = (quantity * price).toFixed(2);                           // calculate the extended price and display using 2 decimal places
        
        document.getElementById('extprice').value = extendedPrice;
    } 
    else {
        alert("Please enter the quantity as a positive integer greater than 1.");      // error checking
        
        return;
    }

    // cookies made with submission input
    setCookie('order_size', size);
    
    setCookie('order_gender', gender, { expires: 7 });              // cookies have expiration dates
    
    setCookie('order_color', color, { maxAge: 300 });               // cookies are 'max-age'
    
    setCookie('order_age', age, { httpOnly: true });                // cookie uses the 'HttpOnly' attribute
    
    setCookie('order_height', height, { secure: true });            // cookie uses the 'Secure' attribute
    
    setCookie('order_weight', weight, { sameSite: 'Strict' });      // cookie uses the 'SameSite' attribute
    
    setCookie('order_prodid', prodid);
    
    setCookie('order_qty', quantity, { maxAge: 600 });              // cookies are 'max-age'
    
    setCookie('order_price', price.toString());
    
    setCookie('order_extprice', extendedPrice, { expires: 5 });     // cookies have expiration dates

    resetFields();                                                  // reset all fields after order
});

document.getElementById('reset').addEventListener('click', resetFields);

function validateNumericFields(age, height, weight, qty) {
    const numericPattern = /^\d+$/;                                 // only positive integers
    
    if (!numericPattern.test(age) || !numericPattern.test(height) || !numericPattern.test(weight)) {
        alert("Please enter age, height, and weight in integer form.");                 // error checking
        
        return false;
    }
    if (qty && (!numericPattern.test(qty) || parseInt(qty) <= 1)) {
        alert("Please enter the quantity as a positive integer greater than 1.");       // error checking
        
        return false;
    }

    return true;
}

function resetFields() {                                             // reset fields after order
    
    document.getElementById('size').selectedIndex = 0;
    
    document.getElementById('gender').selectedIndex = 0;
    
    document.getElementById('color').selectedIndex = 0;
    
    document.getElementById('age').value = '';
    
    document.getElementById('height').value = '';
    
    document.getElementById('weight').value = '';
    
    document.getElementById('qty').value = '';
    
    document.getElementById('extprice').value = '';
}
