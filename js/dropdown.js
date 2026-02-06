const filtroBtn = document.querySelector(".filtro");
const menu = document.getElementById("menu");


// Abre/fecha menu
filtroBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Seleciona opção
menu.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.add("hidden");
    });
});

// Fecha menu clicando fora
document.addEventListener("click", (e) => {
    if (!filtroBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add("hidden");
    }
});




