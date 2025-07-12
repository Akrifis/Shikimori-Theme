const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    // Меняем текст кнопки
    if (body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️ Светлая тема";
    } else {
        themeToggle.textContent = "🌙 Тёмная тема";
    }
});
