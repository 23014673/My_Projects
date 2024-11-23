/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 9/26/2024
Assignment: Exercise 6: Getting Set Up - Two Communities in Florida
*/

$(document).ready(function() {

    $('h1').css('text-align', 'left');                          // Set the <h1> text to the left margin
    
    $('h2').css('margin-left', '2ems');                         // Indent <h2> text to 2ems
    
    $('p').css('margin-left', '4ems');                          // Indent <p> text to 4ems
    
    $('p').css('font-size', '1.4em');                           // Set font size for all <p> elements to 1.4ems

    $('p:lt(10)').addClass('first-ten-elements');               // Add class to the first 10 <p> elements

    $('p:gt(9)').addClass('second-ten-elements');               // Add class to the second 10 <p> elements

    $('p:nth-of-type(3n)').addClass('every-third-element');     // Add a background color to every 3rd <p> element
});