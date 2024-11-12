/*
    AUTHOR: Hannah Bauer 
    COURSE: COP2822.0M1
    DATE: 4/08/2024
    ASSIGNMENT: Exercise 13.2 - Enhance The Slide Show Application
*/

"use strict";
var slideshow = {
    timer: null,
    nodes: { image: null, caption: null },
    img: { cache: [], counter: 0 },
    play: true,
    speed: 2000,

                                        // METHOD OF PRELOAD IMAGES
    loadImages: function(slides) {
        var image;
        for ( var i in slides ) {

            image = new Image();        // PRELOAD IMAGE - COPY TITLE PROPERTIES - AND SAVE IN ARRAY
            image.src = slides[i].href;
            image.title = slides[i].title;
            this.img.cache.push( image );
        }
        return this;
    },

    startSlideShow: function() {                    // METHOD TO START SLIDESHOW
        if (arguments.length === 2) { 
            this.nodes.image = arguments[0]; 
            this.nodes.caption = arguments[1];
        }
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
        return this;
    },

    stopSlideShow: function() {                    // METHOD TO STOP THE SLIDESHOW
        clearInterval( this.timer );
        return this;
    },

    displayNextImage: function() {                // METHOD TO DISPLAY THE NEXT IMAGES IN THE SLIDESHOW
        this.img.counter = ++this.img.counter % this.img.cache.length;
        var image = this.img.cache[this.img.counter];
        this.nodes.image.src = image.src;
        this.nodes.caption.firstChild.nodeValue = image.title;
    },

                                                // METHOD TO SET THE TEXT OF THE PLAY/PAUSE BUTTON
    setPlayText: function(a) {
        a.text = (this.play)? "Resume": "Pause";
        return this;
    },

                                                // METHOD TO TOGGLE BETWEEN PLAY AND PAUSE
    togglePlay: function(e) {        
        if (this.play) { 
            this.stopSlideShow().setPlayText(this); 
        } else { 
            this.startSlideShow().setPlayText(this); 
        }
        this.play = !this.play;
        evt.preventDefault(e);  
    },

                                            // METHOD TO CHANGE THE SLIDESHOW SPEED
    changeSpeed: function(e) {
        console.log("Change speed method called");
        evt.preventDefault(e);                                  // PREVENT THE LINK'S DEFAULT ACTIONS
        var currentSpeed = this.speed;
        var milliseconds = prompt("Current speed is " + currentSpeed + " milliseconds.\nPlease enter a new speed in milliseconds", "2000");
        console.log("New speed input: ", milliseconds);
        if (milliseconds === null || milliseconds === "") {
            return;
        }
        if (isNaN(parseInt(milliseconds))) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }
        this.stopSlideShow().speed = parseInt(milliseconds);
        console.log("New speed applied: ", this.speed);
        this.startSlideShow();
    }
      
};