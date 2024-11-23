/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 10/22/2024
Assignment: Exercise 10: Form Validation
*/

document.addEventListener('DOMContentLoaded', function() {

    if (window.location.pathname.includes('result.html')) {

        const urlParams = new URLSearchParams(window.location.search);

        document.getElementById('firstName').textContent = urlParams.get('firstName') || "--";

        document.getElementById('age').textContent = urlParams.get('age') || "--";
        
        document.getElementById('phoneNumber').textContent = urlParams.get('phoneNumber') || "--";
        
        document.getElementById('gpa').textContent = urlParams.get('gpa') || "--";
        
        document.getElementById('macAddress').textContent = urlParams.get('macAddress') || "--";
        
        document.getElementById('ipaddress').textContent = urlParams.get('ipaddress') || "--";
        
        document.getElementById('creditCard').textContent = urlParams.get('creditCard') || "--";
        
        document.getElementById('sfId').textContent = urlParams.get('sfId') || "--";
    }

    if (document.getElementById('dataForm')) {

        document.getElementById('dataForm').addEventListener('submit', function (event) {
        
            let valid = true;

// First Name Validation (simple check for non-empty)
            const firstName = document.getElementById('firstName').value.trim();
        
            if (!firstName) {
                document.getElementById('firstNameError').textContent = "feild is required";
        
                valid = false;
            } 
            
            else {
                document.getElementById('firstNameError').textContent = '';
            }

// Age Validation with Try-Catch (< 18 and > 109)
            try {
                const age = parseInt(document.getElementById('age').value);

                if (isNaN(age) || age < 18 || age > 109) {
                    throw new Error("Must be between 18 and 109");
                }

                document.getElementById('ageError').textContent = '';

            } catch (error) {
                document.getElementById('ageError').textContent = error.message;

                valid = false;
            }

// Phone Number Validation (fits format: 123-123-1234)
            const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;

            const phoneNumber = document.getElementById('phoneNumber').value;

            if (!phoneNumberPattern.test(phoneNumber)) {
                document.getElementById('phoneNumberError').textContent = "Must be in format: 123-123-1234";

                valid = false;
            } 
            
            else {
                document.getElementById('phoneNumberError').textContent = '';
            }

// GPA Validation (0-4 range format)
            const gpaPattern = /^[0-4](\.\d{1,2})?$/;

            const gpa = document.getElementById('gpa').value;

            if (!gpaPattern.test(gpa)) {
                document.getElementById('gpaError').textContent = "Must be between: 0-4";

                valid = false;

            } else {
                document.getElementById('gpaError').textContent = '';
            }

// MAC Address Validation
            const macAddressPattern = /^[0-9A-Fa-f]{2}(-[0-9A-Fa-f]{2}){5}$/;

            
            const macAddress = document.getElementById('macAddress').value;
            
            if (!macAddressPattern.test(macAddress)) {
                document.getElementById('macAddressError').textContent = "Must be in format: X0-X0-X0-X0-X0-X0";
            
                valid = false;
            }
            
            else {
                document.getElementById('macAddressError').textContent = '';
            }

// IP Address Validation
            const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

            const ipaddress = document.getElementById('ipaddress').value;
            
            if (!ipPattern.test(ipaddress) || !ipaddress.split('.').every(segment => segment >= 0 && segment <= 255)) {
                document.getElementById('ipaddressError').textContent = "Must be in format 000.000.000.000 and between 0 and 255";
            
                valid = false;
            }
            
            else {
                document.getElementById('ipaddressError').textContent = '';
            }

// Credit Card Validation
            const creditCardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
            
            const creditCard = document.getElementById('creditCard').value;
            
            if (!creditCardPattern.test(creditCard)) {
                document.getElementById('creditCardError').textContent = "Must be in format 1234-5678-1234-5678";
                
                valid = false;
            }
            
            else {
                document.getElementById('creditCardError').textContent = '';
            }

// SF ID Validation (SF-1234-1234 format)
            const sfIdPattern = /^SF-\d{4}-\d{4}$/;
            
            const sfId = document.getElementById('sfId').value;
            
            if (!sfIdPattern.test(sfId)) {
                document.getElementById('sfIdError').textContent = "Must be in format: SF-1234-1234";
            
                valid = false;
            } 
            
            else {
                document.getElementById('sfIdError').textContent = '';
            }

// Prevent form submission if any input is invalid
            if (!valid) {
                event.preventDefault();
            }
        });
    }
});
