/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 9/7/2024
Assignment: Exercise 3: Florida Festivals Website
*/


const count = 8;
for (let i = 0; i < count; i++) {
    document.getElementById("fest" + i).addEventListener("click", festival, false);
}

function festival() {
    if (this.id === "fest0") {
        document.getElementById('festival').innerHTML = 'Gasparilla Pirate Fest';
        document.getElementById('image').innerHTML = '<img src="images/gasparilla.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://gasparillapiratefest.com" target="_blank">Visit Gasparilla Pirate Fest</a>';
    } else if (this.id === "fest1") {
        document.getElementById('festival').innerHTML = 'Grant Seafood Festival';
        document.getElementById('image').innerHTML = '<img src="images/grants.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://www.grantseafoodfestival.com" target="_blank">Visit Grant Seafood Festival</a>';
    } else if (this.id === "fest2") {
        document.getElementById('festival').innerHTML = 'EDC Orlando';
        document.getElementById('image').innerHTML = '<img src="images/edc.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://orlando.electricdaisycarnival.com" target="_blank">Visit EDC Orlando</a>';
    } else if (this.id === "fest3") {
        document.getElementById('festival').innerHTML = 'Florida State Fair';
        document.getElementById('image').innerHTML = '<img src="images/statefair.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://floridastatefair.com" target="_blank">Visit Florida State Fair</a>';
    } else if (this.id === "fest4") {
        document.getElementById('festival').innerHTML = 'Ultra Music Festival';
        document.getElementById('image').innerHTML = '<img src="images/winterfest.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://ultramusicfestival.com" target="_blank">Visit Ultra Music Festival</a>';
    } else if (this.id === "fest5") {
        document.getElementById('festival').innerHTML = 'Spring Garden Festival';
        document.getElementById('image').innerHTML = '<img src="images/fairchild.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://fairchildgarden.org/events/" target="_blank">Visit Spring Garden Festival</a>';
    } else if (this.id === "fest6") {
        document.getElementById('festival').innerHTML = 'Winterfest Boat Parade';
        document.getElementById('image').innerHTML = '<img src="images/winterfest.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://winterfestparade.com" target="_blank">Visit Winterfest Boat Parade</a>';
    } else if (this.id === "fest7") {
        document.getElementById('festival').innerHTML = 'Tortuga Music Festival';
        document.getElementById('image').innerHTML = '<img src="images/tortuga.webp" width="596" height="422">';
        document.getElementById('url').innerHTML = '<a href="https://tortugamusicfestival.com" target="_blank">Visit Tortuga Music Festival</a>';
    }
}