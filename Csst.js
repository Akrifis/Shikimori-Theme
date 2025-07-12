const copyButton = document.getElementById("copy-css");

copyButton.addEventListener("click", () => {
    const cssCode = `
        /* Ваш CSS для Shikimori */
        .profile-header {
            background: ${styles[currentStyle].bg};
            color: white;
            padding: 20px;
            border-radius: 10px;
        }
    `;

    navigator.clipboard.writeText(cssCode)
        .then(() => {
            copyButton.textContent = "✅ Скопировано!";
            setTimeout(() => {
                copyButton.textContent = "📋 Скопировать CSS";
            }, 2000);
        })
        .catch(err => {
            console.error("Ошибка копирования: ", err);
        });
});
