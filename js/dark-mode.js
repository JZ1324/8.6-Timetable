// Dark mode functionality
function setDarkModePreference(isDarkMode) {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1); // Cookie expiration in 1 year
    // Set the cookie at the root path ("/") to make it accessible across all pages
    document.cookie = `darkMode=${isDarkMode}; expires=${expiryDate.toUTCString()}; path=/`;
}

// Function to check if dark mode preference is stored in cookies and apply settings
function checkDarkModePreference() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'darkMode' && value === 'true') {
            // Apply dark mode settings
            applyDarkMode();
        }
    }
}

// Function to apply dark mode settings
function applyDarkMode() {
    const body = document.body;
    const button = document.getElementById("darkModeButton");

    body.classList.add("dark-mode");
    button.textContent = "Light Mode"; // Change button text
}

// Function to apply light mode settings
function applyLightMode() {
    const body = document.body;
    const button = document.getElementById("darkModeButton");

    body.classList.remove("dark-mode");
    button.textContent = "Dark Mode"; // Change button text
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const currentMode = body.classList.contains("dark-mode");
    const button = document.getElementById("darkModeButton");

    if (currentMode) {
        applyLightMode();
        setDarkModePreference(false); // Store user preference
    } else {
        applyDarkMode();
        setDarkModePreference(true); // Store user preference
    }
}

// Check dark mode preference when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    checkDarkModePreference();
});