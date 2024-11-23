/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 9/18/2024
Assignment: Exercise 5: Timings with Image Animation - Mission to Mars
*/

document.getElementById("start").addEventListener("click", function() {
    let clockTimer = 10;                                                                       // Start countdown from 10 seconds
    
    const countdownElement = document.getElementById("countdown");
    
    countdownElement.textContent = ":10";                                                      // Display initial time ":10"
    
    let countdownTimer = setInterval(countdown, 1000);                                         // Display the countdow in 1-second intervals
    
    function countdown() {
        if (clockTimer > 0) {
            clockTimer--;
            countdownElement.textContent = clockTimer >= 10 ? ":" + clockTimer : ":0" + clockTimer;   // Ensures the time displays properly ":0"
        
        } else if (clockTimer === 0) {
            countdownElement.textContent = "LIFTOFF";
            clearInterval(countdownTimer);                                                      // Stop the countdown
            liftoffsequence();                                                                  // Restart the rocket launch
        
        } else {
            //A data problem has happened
        }
    }
});

function liftoffsequence() {
    let height = screen.height;
    
    let i = -154;
    
    let speed = 1;
    
    let rocketTimer = setInterval(lifting, 100);

    function lifting() {
        speed++;
        document.getElementById("rocket").style.bottom = i + "px";
        i += (speed * 2);
        
        if (i >= height) {
            clearInterval(rocketTimer)
            
            alert("We're Mars Bound! \n\n ꒰ ´｡• ༝ •｡` ꒱ ");
            
            setTimeout(function() { location.reload(); }, 1500);            // Code restarts after 1.5 seconds
        }
    }
}