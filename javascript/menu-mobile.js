document.querySelector('#btn-menu-mobile').addEventListener('click', () => {

    document.querySelector('#modal-menu-mobile').classList.add('abrir-menu-mobile');
});

// Fechar menu mobile
document.querySelector('#btn-close-menu-mobile').addEventListener('click', () => {

    document.querySelector('#modal-menu-mobile').classList.remove('abrir-menu-mobile');
});