alert('Este site está sendo refatorado e portanto está em desenvolvimento! Fique ligado às próximas atualizações :)')

const whiteBody = document.body;
const whiteContainer = document.body.querySelector('.center-content');
const themeButton = document.body.querySelector('.toggle');
const whiteText = whiteContainer.querySelector('p')

let isLight = true;

function lightMode() {
    whiteBody.classList.toggle('light-mode')
    whiteText.classList.toggle('light-mode')

    // isLight = !isLight;

}
themeButton.addEventListener('click', lightMode)

$('.toggle').click(function () {
    $(".moon").toggleClass('sun');
    $(".toggle").toggleClass('day');
});