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

function mudarDePagina(pagina) {
  window.location.href = pagina;
}

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    document.body.dataset.theme = isDark ? "dark" : "light";
    themeToggle.textContent = isDark ? "☾" : "☀";
    themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
    themeToggle.title = isDark ? "Ativar modo claro" : "Ativar modo escuro";

    themeToggle.addEventListener("click", () => {
        const enableDark = document.body.dataset.theme !== "dark";
        document.body.dataset.theme = enableDark ? "dark" : "light";
        localStorage.setItem("theme", enableDark ? "dark" : "light");
        themeToggle.textContent = enableDark ? "☾" : "☀";
        themeToggle.setAttribute("aria-label", enableDark ? "Ativar modo claro" : "Ativar modo escuro");
        themeToggle.title = enableDark ? "Ativar modo claro" : "Ativar modo escuro";
    });
}
