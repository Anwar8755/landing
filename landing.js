// Wait for the DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
    // Select the Get Started button
    const getStartedButton = document.querySelector("header button");

    // Add a click event listener to the button
    getStartedButton.addEventListener("click", () => {
        // Display an alert message when the button is clicked
        alert("Welcome to Our Site! We’re glad to have you here.");
    });
});
