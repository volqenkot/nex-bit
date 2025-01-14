// Hinzufügen von Scroll-Animationen
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            section.classList.add("active");
        }
    });
});
