// time.js
function calculateTimeDifference() {
    var startDate = new Date('2022-03-25'); // Specify your start date here
    var currentDate = new Date();

    var yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    var monthDiff = currentDate.getMonth() - startDate.getMonth();
    var dayDiff = currentDate.getDate() - startDate.getDate();

    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    var hourDiff = currentDate.getHours() - startDate.getHours();
    var minuteDiff = currentDate.getMinutes() - startDate.getMinutes();
    var secondDiff = currentDate.getSeconds() - startDate.getSeconds();

    if (secondDiff < 0) {
        minuteDiff--;
        secondDiff += 60;
    }
    if (minuteDiff < 0) {
        hourDiff--;
        minuteDiff += 60;
    }
    if (hourDiff < 0) {
        dayDiff--;
        hourDiff += 24;
    }

    document.getElementById('years').textContent = yearDiff;
    document.getElementById('months').textContent = monthDiff;
    document.getElementById('days').textContent = dayDiff;
    document.getElementById('hours').textContent = hourDiff;
    document.getElementById('minutes').textContent = minuteDiff;
    document.getElementById('seconds').textContent = secondDiff;
}

// Call the calculateTimeDifference function initially
calculateTimeDifference();

// Update the countdown every second
setInterval(calculateTimeDifference, 1000);
