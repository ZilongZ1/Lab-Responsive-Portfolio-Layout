
document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }

        function updateThemeButton() {
            const isDarkMode = document.body.classList.contains("dark-mode");

            if (isDarkMode) {
                themeButton.textContent = "☀️ Light Mode";
                themeButton.setAttribute("aria-pressed", "true");
            } else {
                themeButton.textContent = "🌙 Dark Mode";
                themeButton.setAttribute("aria-pressed", "false");
            }
        }

        updateThemeButton();

        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDarkMode = document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "portfolio-theme",
                isDarkMode ? "dark" : "light"
            );

            updateThemeButton();
        });
    }


    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && typeof ScrollReveal === "function") {

        const scrollReveal = ScrollReveal({
            distance: "30px",
            duration: 800,
            delay: 100,
            origin: "bottom",
            opacity: 0,
            easing: "ease-out",
            reset: false
        });

        scrollReveal.reveal("#about, #contact, #projects > h2");

        scrollReveal.reveal("#projects article", {
            interval: 150
        });
    }

});

