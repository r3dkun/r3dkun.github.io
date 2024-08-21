function toggleDarkMode() {
    const body = document.body;
    const darkModeClass = "dark-mode";

    if (body.classList.contains(darkModeClass)) {
        body.classList.remove(darkModeClass);
        localStorage.setItem("dark-mode", "false");
    } else {
        body.classList.add(darkModeClass);
        localStorage.setItem("dark-mode", "true");
    }
}

// Check if dark mode is enabled on page load
if (localStorage.getItem("dark-mode") === "true") {
    toggleDarkMode();
}