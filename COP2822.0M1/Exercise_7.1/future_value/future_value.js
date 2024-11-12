var $ = function(id) {
    return document.getElementById(id);
}

var getRandomNumber = function(max) {
    var random;                         // CREATING A SET OF RANDOM NUMBERS
    if (!isNaN(max)) {
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1; }
    return random;
}

var calculateFV = function(investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
        if (!isFinite(futureValue)) {       // TEST TO CHECK IF FUTURE VALUE IS INFINITY
            alert("Future value = Infinity, i = " + i);
            break; }
    }
    futureValue = futureValue.toFixed(2);

    // CREATE AN ALERT FOR: the maximum value of a JavaScript number
    alert("Maximum value of a JavaScript number: " + Number.MAX_VALUE);

    return futureValue;
}

var formatFV = function(futureValue) {
    futureValue = futureValue.toString();

    var decimalIndex = futureValue.indexOf('.');  // FIND THE INTDEX OF THE DECIMAL POINT
    var cents = futureValue.substring(decimalIndex + 1);   // EXTRACT CENTS
    var dollars = futureValue.substring(0, decimalIndex);  // EXTRACT DOLLAR

    var formattedDollars = ''; // FORMAT DOLLARS WITH COMMAS
    var length = dollars.length;
    var count = 0;
    for (var i = length - 1; i >= 0; i--) {
        count++;
        formattedDollars = dollars.charAt(i) + formattedDollars;
        if (count % 3 === 0 && i !== 0) {
            formattedDollars = ',' + formattedDollars; }
    }

    formattedDollars = '$' + formattedDollars; // ADD A DOLLAR SIGN

    if (cents.length > 0) {         // TEST TO SEE IF THERE ARE CENTS + ADD DECIMAL/CENTS
        formattedDollars += '.' + cents; }
    return formattedDollars;
}

var getDate = function() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

                // EXTRACT THE APPROPRIATE DATE AND TIME USING THE 24-HOUR FORMAT
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var formattedDate = "Today is " + month + "/" + day + "/" + year + " at " + hours + ":" + minutes;
    return formattedDate;
}

var processEntries = function() {
    // var investment = parseFloat($("investment").value);
    // var rate = parseFloat($("annual_rate").value);
    // var years = parseInt($("years").value);
    var maxInvestment = 50000;
    var maxRate = 15;
    var maxYears = 50;

    var investment = getRandomNumber(maxInvestment);
    var rate = getRandomNumber(maxRate);            // GET RANDOM VALUES
    var years = getRandomNumber(maxYears);
    $("investment").value = investment;
    $("annual_rate").value = rate;
    $("years").value = years;

    if (isNaN(investment) || investment <= 0) {
        alert("Must be > 0");
    } else if (isNaN(rate) || rate <= 0) {
        alert("Must be > 0");
    } else if (isNaN(years) || years <= 0) {
        alert("Must be > 0");
    } else {
        var futureValue = calculateFV(investment, rate, years);
        var formattedFutureValue = formatFV(futureValue);
        $("future_value").value = formattedFutureValue; }
}

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();

    var formattedDate = getDate();  // CALL THE getDate METHOD TO FORMATT THE DATE
    $("date").textContent = formattedDate; // DISPLAY THE FORMATTED DATE
}