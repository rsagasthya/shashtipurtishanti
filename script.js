document.getElementById("rsvp-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const response = document.querySelector('input[name="response"]:checked').value;
    const message = document.querySelector('textarea[name="message"]').value;

    alert(`Thank you for your response! \nResponse: ${response} \nMessage: ${message}`);

    // You could use an AJAX request here to send this data to a server or Google Sheet
    document.getElementById("rsvp-form").reset();
});
