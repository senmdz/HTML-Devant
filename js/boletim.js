function abrirPopUpBol() {
    document.getElementById("popup-boletim").classList.remove("hidden");
}
function fecharPopUpBol() {
    document.getElementById("popup-boletim").classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        fecharPopUpBol();
    }
});
