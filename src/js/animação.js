const imagensDeFundo = [
    "src/imagens/slide1.png",
    "src/imagens/slide2.png",
    "src/imagens/slide3.png",
];

let indexImagemAtual = 0;
const home = document.querySelector('.home');
const imagemFundo = home.querySelector('.imagem-fundo');

function trocarImagemDeFundo() {
    // Aplica a transição de opacidade
    imagemFundo.style.transition = 'opacity 1s ease-in-out';

    // Define a opacidade para 0
    imagemFundo.style.opacity = 0;

    // Aguarda 1 segundo antes de trocar a imagem
    setTimeout(() => {
        // Troca a imagem de fundo
        imagemFundo.src = imagensDeFundo[indexImagemAtual];

        // Atualiza o índice para a próxima imagem
        indexImagemAtual = (indexImagemAtual + 1) % imagensDeFundo.length;

        // Força uma reflow para que a transição seja aplicada novamente
        void imagemFundo.offsetWidth;

        // Define a opacidade para 1
        imagemFundo.style.opacity = 1;
    }, 1000);
}

setInterval(trocarImagemDeFundo, 8000);
