const links = document.querySelectorAll('nav a');
const menu_mobile = document.querySelector('#modal-menu-mobile');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Fecha o menu mobile quando é clicado em um link do menu mobile
        menu_mobile.classList.remove('abrir-menu-mobile');

        const id = link.getAttribute('href');

        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

