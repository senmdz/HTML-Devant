function abrirPopUpDes() {
    document.getElementById("popup-desempenho").classList.remove("hidden");
}
function fecharPopUpDes() {
    document.getElementById("popup-desempenho").classList.add("hidden");
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        fecharPopUpDes();
    }
});
