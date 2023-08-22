// Event listener for Generate button click
document.getElementById("generate").addEventListener("click", function () {
    generateProfile();
});

// Function to generate the profile
function generateProfile() {
    const boyName = document.getElementById("boy-name").value;
    const girlName = document.getElementById("girl-name").value;
    const boyImageInput = document.getElementById("boy-photo");
    const girlImageInput = document.getElementById("girl-photo");
    const boyImage = document.getElementById("boy-image");
    const girlImage = document.getElementById("girl-image");
    const formContainer = document.querySelector(".form-container");
    const profileContainer = document.getElementById("profile");
    const relationshipStatus = document.getElementById("relationship-status").value;
    const startDate = document.getElementById("start-date").value; // Get the selected start date

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

    if (relationshipStatus === "single") {
        document.getElementById("girl-photo-container").style.display = "none";
        document.getElementById("girl-name-label").style.display = "none";
        document.getElementById("girl-name").style.display = "none";
        document.getElementById("girl-image").style.display = "none";
        document.querySelector(".center-heart").style.display = "none";
        document.querySelector(".symbol").style.display = "none";
        document.querySelector(".wbt").textContent = "My age is this";
    } else {
        document.getElementById("girl-photo-container").style.display = "block";
        document.getElementById("girl-name-label").style.display = "block";
        document.getElementById("girl-name").style.display = "block";
        document.getElementById("girl-image").style.display = "block";
        document.querySelector(".center-heart").style.display = "block";
        document.querySelector(".symbol").style.display = "block";
        document.querySelector(".wbt").textContent = `Since: ${startDate} We've been together for`;
    }

    if (relationshipStatus === "in-relationship") {
        document.querySelector(".status-text").textContent = "In a Relationship";
    } else if (relationshipStatus === "bff") {
        document.querySelector(".status-text").textContent = "Best Friends Forever";
    } else if (relationshipStatus === "got-married") {
        document.querySelector(".status-text").textContent = "Got Married";
    } else if (relationshipStatus === "single") {
        document.querySelector(".status-text").textContent = "Single";
    } else if (relationshipStatus === "custom") {
        document.querySelector(".status-text").textContent = "Custom";
    }

    calculateTimeDifference();
}
