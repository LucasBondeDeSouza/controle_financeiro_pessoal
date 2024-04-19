// Obtém o nome do arquivo atual
var currentPage = window.location.pathname.split("/").pop();

// Verifica se o nome do arquivo atual é "informacoes.html" ou "home.html"
if (currentPage === "informacoes.html") {
    // Adiciona a classe 'selected' ao link de informações
    document.querySelector('nav .segundo a').classList.add('selected');
    document.querySelector('nav .primeiro a').classList.remove('selected');
} else {
    // Adiciona a classe 'selected' ao link da home (caso seja uma página diferente de "informacoes.html")
    document.querySelector('nav .primeiro a').classList.add('selected');
    document.querySelector('nav .segundo a').classList.remove('selected');
}