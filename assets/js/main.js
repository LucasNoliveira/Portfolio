function changeMode() {
    var body = document.body;

    body.classList.toggle("dark-theme");
    let button = document.getElementById('button');

    if (button.innerHTML == "Dark Mode") {
        button.innerHTML = "Normal Mode";
    } else {
        button.innerHTML = "Dark Mode"
    }
}

function toggleTheme() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('dark-theme');
}

function titleTheme() {
    const title = document.querySelector('.title');
    title.classList.toggle('dark-theme');
}