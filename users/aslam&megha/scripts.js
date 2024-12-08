// Function to calculate the time difference
function calculateTimeDifference() {
    const startDate = new Date('2020-09-25');
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Call the function initially and update every second
calculateTimeDifference();
setInterval(calculateTimeDifference, 1000);

// Quotes array and display function
const quotes = [
    "In the tapestry of life, love is the most vibrant and intricate thread.",
    "Together is a wonderful place to be.",
    "Love is not just looking at each other, it's looking in the same direction."
];

function displayQuote() {
    document.getElementById("quote").textContent = getRandomQuote();
}

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

displayQuote();
setInterval(displayQuote, 5000); // Update quote every 5 seconds