// Global variable to hold RSVP data
let rsvps = {};

// Load existing RSVPs from local storage
function loadRSVPs() {
    const existingRsvps = localStorage.getItem('rsvps');
    if (existingRsvps) {
        rsvps = JSON.parse(existingRsvps);
    }
}

// Save RSVPs to local storage
function saveRSVPs() {
    localStorage.setItem('rsvps', JSON.stringify(rsvps));
}

// Event listener for form submission
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const response = document.getElementById('response').value;
    const message = document.getElementById('message').value;

    // Create key for the RSVP
    const key = `${name}-${emailOrPhone}`;

    // Check if the RSVP already exists
    if (rsvps[key]) {
        // Update existing RSVP
        rsvps[key].response = response;
        rsvps[key].message = message;
        alert('RSVP updated successfully!');
    } else {
        // Record new RSVP
        rsvps[key] = {
            name,
            emailOrPhone,
            response,
            message
        };
        alert('RSVP recorded successfully!');
    }

    // Save to local storage
    saveRSVPs();

    // Optionally clear the form after submission
    document.getElementById('rsvpForm').reset();
});

// Show or hide the optional message input based on response selection
document.getElementById('response').addEventListener('change', function() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.style.display = this.value === 'no' ? 'block' : 'none';
});

// Load existing RSVPs on page load
loadRSVPs();
