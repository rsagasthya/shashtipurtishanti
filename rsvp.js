const form = document.getElementById('rsvpForm');
form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const url = "https://script.google.com/macros/s/AKfycbzxJ-hD5L1Ji1vTLwwv5Uad59xX5emMKjxioklv_vQYpptb6042Yt6beOG39AmoVaBIGA/exec"; // Replace with your script URL

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (result.status === "success") {
            alert(result.message); // Show success message
            form.reset(); // Clear the form
        } else {
            alert("There was an issue submitting the form.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});