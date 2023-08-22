// Function to calculate the age and time difference
function calculateAgeAndTime() {
    var birthDate = new Date(document.getElementById('birthdate').value);
    var currentDate = new Date();
    
    var yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    var dayDiff = currentDate.getDate() - birthDate.getDate();
    
    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    
    var hourDiff = currentDate.getHours() - birthDate.getHours();
    var minuteDiff = currentDate.getMinutes() - birthDate.getMinutes();
    var secondDiff = currentDate.getSeconds() - birthDate.getSeconds();
    
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
    
    var result = "Age: " + yearDiff + " years, " + monthDiff + " months, " + dayDiff + " days, " +
                 hourDiff + " hours, " + minuteDiff + " minutes, " + secondDiff + " seconds";
    
    document.getElementById('result').innerHTML = result;
}

// Function to update the count-up display
function updateCountUp(startDate) {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const totalSeconds = Math.floor(timeDiff / 1000);
    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    const months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Function to generate the profile
function generateProfile() {
    const boyName = document.getElementById("boy-name").value;
    const girlName = document.getElementById("girl-name").value;
    const startDateInput = document.getElementById("start-date").value;
    const boyImageInput = document.getElementById("boy-photo");
    const girlImageInput = document.getElementById("girl-photo");
    const boyImage = document.getElementById("boy-image");
    const girlImage = document.getElementById("girl-image");
    const formContainer = document.querySelector(".form-container");
    const profileContainer = document.getElementById("profile");

    const startDate = new Date(startDateInput);

    document.querySelector(".boy-name").textContent = boyName;
    document.querySelector(".girl-name").textContent = girlName;

    if (boyImageInput.files && boyImageInput.files[0]) {
        boyImage.src = URL.createObjectURL(boyImageInput.files[0]);
    }

    if (girlImageInput.files && girlImageInput.files[0]) {
        girlImage.src = URL.createObjectURL(girlImageInput.files[0]);
    }

    formContainer.style.display = "none";
    profileContainer.style.display = "block";
    updateCountUp(startDate);

    setInterval(function () {
        updateCountUp(startDate);
    }, 1000);
}

document.getElementById("generate").addEventListener("click", generateProfile);
document.getElementById("calculate").addEventListener("click", calculateAgeAndTime); // Add this line
