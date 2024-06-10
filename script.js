//your JS code here. If required.
// Function to get a cookie by name
window.onload = function() {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = value;
        return acc;
    }, {});

    if (cookies.fontSize) {
        document.documentElement.style.setProperty('--fontsize', `${cookies.fontSize}px`);
        document.getElementById('fontsize').value = cookies.fontSize;
    }

    if (cookies.fontColor) {
        document.documentElement.style.setProperty('--fontcolor', cookies.fontColor);
        document.getElementById('fontcolor').value = cookies.fontColor;
    }
};

const form = document.getElementById('preferencesForm');
form.addEventListener('submit', savePreferences);

function savePreferences(event) {
    event.preventDefault();

    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    const date = new Date();
    date.setFullYear(date.getFullYear() + 1); // Cookie will expire in 1 year

    document.cookie = `fontSize=${fontSize}; expires=${date.toUTCString()}; path=/`;
    document.cookie = `fontColor=${fontColor}; expires=${date.toUTCString()}; path=/`;

    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.documentElement.style.setProperty('--fontcolor', fontColor);
}