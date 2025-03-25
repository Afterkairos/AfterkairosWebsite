// Asegura que la página siempre inicie desde arriba al recargar
window.onload = function() {
    window.scrollTo(0, 0);
};

// Detecta el scroll y cambia el navbar
document.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});