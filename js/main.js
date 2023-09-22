const whiteBody = document.body;
const whiteContainer = document.body.querySelector('.center-content');
const buttonText = document.body.querySelector('.theme-button');
const whiteText = whiteContainer.querySelector('p')

let isLight = true;

function lightMode() {
    whiteBody.classList.toggle('light-mode')
    whiteText.classList.toggle('light-mode')
    buttonText.innerHTML.toggle = 'Dark'

    isLight = !isLight;

    buttonText.textContent = isLight ? 'Dark' : 'Light';
}
whiteBody.addEventListener('click', lightMode)

$('.toggle').click(function () {
    $(".moon").toggleClass('sun');
    $(".toggle").toggleClass('day');
});