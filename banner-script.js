(function() {
    'use strict';

    // Function to create the banner
    function createBanner() {
        // Create banner div
        const banner = document.createElement("div");
        banner.classList.add("custom-banner");

        // Create the "Fill Marks" button
        const fillButton = document.createElement("button");
        fillButton.innerText = "Fill Marks";
        fillButton.classList.add("custom-button");
        fillButton.onclick = fillMarks;

        // Create the "Close" button
        const closeButton = document.createElement("span");
        closeButton.innerText = "✕";
        closeButton.classList.add("close-button");
        closeButton.onclick = () => banner.remove();

        // Add the button and close button to the banner
        banner.appendChild(fillButton);
        banner.appendChild(closeButton);

        // Add the banner to the body
        document.body.appendChild(banner);
    }

    // Function to fill marks in all textboxes
    function fillMarks() {
        // Prompt the user for the marks to fill
        const marks = prompt("Enter the marks to fill in all formative marks textboxes:");

        // Check if the user provided input; if not, stop execution
        if (marks === null || marks === "") {
            alert("No marks entered. Operation cancelled.");
            return;
        }

        // Select all input elements of type 'text' relevant for formative marks entry
        const textboxes = document.querySelectorAll("input[type='text']");

        // Check if any textboxes were found; if none, alert the user
        if (textboxes.length === 0) {
            alert("No textboxes found for formative marks.");
            return;
        }

        // Fill each textbox with the entered marks
        textboxes.forEach(textbox => {
            textbox.value = marks;
        });

        // Confirm completion
        alert("All formative marks textboxes have been filled with the value: " + marks);
    }

    // Initialize the banner when the script loads
    createBanner();
})();
