const whiteBody = document.body;
const lightText = document.body.querySelector('h1, p');
const buttonText = document.body.querySelector('.theme-button');

let isLight = true;

function lightMode (){
    whiteBody.classList.toggle('light-mode')
    lightText.classList.toggle('light-mode')
    buttonText.innerHTML.toggle = 'Dark'

    isLight = !isLight;

    buttonText.textContent = isLight ? 'Dark' : 'Light';
}
whiteBody.addEventListener('click' , lightMode)