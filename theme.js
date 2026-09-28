function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "movieHubTheme",
        isLight ? "light" : "dark"
    );

    updateThemeButton();
}


function loadTheme() {

    const savedTheme =
        localStorage.getItem("movieHubTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    updateThemeButton();
}


function updateThemeButton() {

    const button =
        document.getElementById("themeButton");

    if (!button) return;

    if (document.body.classList.contains("light-mode")) {
        button.textContent = "🌙 Dark";
    } else {
        button.textContent = "☀️ Light";
    }
}


loadTheme();
