const botaoAterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao")
const modoEscutoAtivo = body.classList.contains("modo-escuro")

botaoAterarTema.addEventListener("click", () => {
    imagemBotaoAlterarTema.setAttribute("src", "../src/imagens/moon.png")
    body.classList.toggle("modo-escuro");

    if (modoEscutoAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "../src/imagens/sun.png")
    } else {
        imagemBotaoAlterarTema.setAttribute("src", "../src/imagens/moon.png")
    }
})


