const image = document.getElementById('sun');
const container = document.querySelector('.container');
const textTitle = document.getElementById('title');
const originalContainerBackground = container.style.backgroundImage;
const originalSunImage = image.src;
const originaltextTitle = textTitle.style.textShadow;
const body = document.body;
const originalBackgroundColor = body.style.backgroundColor;

image.addEventListener('click', () => {
    if (container.style.backgroundImage != originalContainerBackground) {
        container.style.backgroundImage = originalContainerBackground; // Reverter a imagem de fundo do container
    } else {
        container.style.backgroundImage = "url('../public/images/_indexMoon.png')"; // Mudar a imagem de fundo do container
    }
    if (image.src != originalSunImage) {
        image.src = originalSunImage; // Reverter a URL da imagem do sol
    } else {
        image.src = "../public/images/moon.png"; // Mudar a URL da imagem do sol
    }
    if (textTitle.style.textShadow != originaltextTitle) {
        textTitle.style.textShadow = originaltextTitle; // Reverter o efeito de sombra do texto
    } else {
        textTitle.style.textShadow = "none"; // Mudar o efeito de sombra do texto
    }
    if(body.style.backgroundColor != originalBackgroundColor) {
        body.style.backgroundColor = originalBackgroundColor; // Reverter a cor de fundo do body
    } else {
        body.style.backgroundColor = "#1e1a55"; // Mudar a cor de fundo do body
    }
});