const preview = document.getElementById("preview");
const styles = [
    { name: "Фиолетовый", bg: "linear-gradient(135deg, #6a3d9a, #ff9e00)" },
    { name: "Синий", bg: "linear-gradient(135deg, #1e3a8a, #3b82f6)" },
    { name: "Розовый", bg: "linear-gradient(135deg, #db2777, #f472b6)" }
];

let currentStyle = 0;

// Меняем стиль каждые 3 секунды
setInterval(() => {
    currentStyle = (currentStyle + 1) % styles.length;
    preview.style.background = styles[currentStyle].bg;
    preview.textContent = styles[currentStyle].name;
}, 3000);
