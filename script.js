const pageBody = document.querySelector('body');
const startButton = document.getElementById('startButton');
const burgerLogo = document.getElementById('burgerLogo');

startButton.addEventListener('click', nextPage);

function nextPage() {
    console.log(burgerLogo.offsetWidth);
    burgerLogo.toggleAttribute('class');
    burgerLogo.className = 'animation-02';

}