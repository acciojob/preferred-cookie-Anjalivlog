//your JS code here. If required.
// Function to get a cookie by name
// Function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to apply preferences
function applyPreferences() {
    const fontSize = getCookie('fontSize');
    const fontColor = getCookie('fontColor');

    if (fontSize) {
        document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
        document.getElementById('fontsize').value = fontSize;
    }

    if (fontColor) {
        document.documentElement.style.setProperty('--fontcolor', fontColor);
        document.getElementById('fontcolor').value = fontColor;
    }
}

// Apply preferences on page load
window.onload = function() {
    applyPreferences();
}

// Event listener for form submission
const form = document.getElementById('preferencesForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    document.cookie = `fontSize=${fontSize}; max-age=31536000; path=/`;
    document.cookie = `fontColor=${fontColor}; max-age=31536000; path=/`;

    // Apply preferences immediately after setting cookies
    applyPreferences();
});
