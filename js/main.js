const whiteBody = document.body;
const whiteContainer = document.body.querySelector('.center-content');
const buttonText = document.body.querySelector('.theme-button');
const whiteText = whiteContainer.querySelector('p')
const lightNav = document.body.querySelector('header')

let isLight = true;

function lightMode (){
    whiteBody.classList.toggle('light-mode')
    whiteText.classList.toggle ('light-mode')
    buttonText.innerHTML.toggle = 'Dark'

    isLight = !isLight;

    buttonText.textContent = isLight ? 'Dark' : 'Light';
}
whiteBody.addEventListener('click' , lightMode)