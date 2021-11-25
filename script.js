const pageBody = document.querySelector('body');
const headerSection = document.querySelector('header');
const mainSection = document.querySelector('main');
const startButton = document.getElementById('startButton');
const burgerLogo = document.getElementById('burgerLogo');

startButton.addEventListener('click', nextPage);

function nextPage() {
    console.log(burgerLogo.offsetWidth);
    burgerLogo.toggleAttribute('class');
    burgerLogo.className = 'animation-02';
    headerSection.style.height = 'auto';
    

    setTimeout(appendContent, 2000);
    function appendContent() {
        mainSection.innerHTML += `
            <p>oi</p>
        `;
    }
}

