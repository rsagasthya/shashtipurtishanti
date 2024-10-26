// Function to load RSVP responses from local storage
function loadRSVPResponses() {
    const responsesContainer = document.getElementById('responsesContainer');
    const rsvps = JSON.parse(localStorage.getItem('rsvps')) || {};

    // Clear previous content in case this function is called multiple times
    responsesContainer.innerHTML = '';

    // Check if there are any RSVPs
    if (Object.keys(rsvps).length === 0) {
        responsesContainer.innerHTML = '<tr><td colspan="5">No responses found.</td></tr>';
        return;
    }

    // Loop through the RSVPs and create table rows
    for (const key in rsvps) {
        if (rsvps.hasOwnProperty(key)) {
            const rsvp = rsvps[key];
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${rsvp.name}</td>
                <td>${rsvp.emailOrPhone}</td>
                <td>${rsvp.response}</td>
                <td>${rsvp.message ? rsvp.message : 'None'}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteRSVP('${key}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `;

            responsesContainer.appendChild(row);
        }
    }
}

// Function to delete an RSVP response
function deleteRSVP(key) {
    const rsvps = JSON.parse(localStorage.getItem('rsvps')) || {};

    // Confirm before deleting
    const confirmDelete = confirm('Are you sure you want to delete this RSVP?');
    if (confirmDelete) {
        // Remove the RSVP from the object
        delete rsvps[key];

        // Update local storage with the modified RSVP list
        localStorage.setItem('rsvps', JSON.stringify(rsvps));

        // Reload the table to reflect the changes
        loadRSVPResponses();
    }
}

// Load responses on page load
loadRSVPResponses();
