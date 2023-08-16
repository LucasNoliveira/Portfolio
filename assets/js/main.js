    function changeMode() {
        const body = document.body;
        const nav = document.querySelector('.nav');
        const button = document.getElementById('button');
        const randomImg = document.querySelector('.random-img');
        const links = nav.getElementsByTagName('a'); // Selecionar apenas os links dentro de .nav-items

        body.classList.toggle("dark-theme");
        nav.classList.toggle('dark-theme');
        randomImg.classList.toggle('dark-theme-image');

        if (button.innerHTML === "Dark Mode") {
            button.innerHTML = "Normal Mode";
        } else {
            button.innerHTML = "Dark Mode";
        }

        for (const link of links) {
            if (nav.classList.contains('dark-theme')) {
                link.style.color = 'white';
            } else {
                link.style.color = 'black'; // Cor branca padrão no modo claro
            }

            link.addEventListener('mouseover', function() {
                this.style.color = 'tomato';
            });

            link.addEventListener('mouseout', function() {
                if (nav.classList.contains('dark-theme')) {
                    this.style.color = 'white';
                } else {
                    link.style.color = 'black'; // Cor branca padrão no modo claro
                }
            });
        }
    }
