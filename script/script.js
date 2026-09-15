function mostrarTela(telaId) {
    const telas = ["tDS", "tQM", "tLOG", "tTXT"];

    telas.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });

    const tela = document.getElementById(telaId);
    if (tela) tela.classList.remove("hidden");

    const titulo = document.getElementById("escolhaHH");
    const subtitulo = document.getElementById("escolhaBB");
}