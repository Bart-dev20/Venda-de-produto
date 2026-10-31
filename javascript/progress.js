const progress = document.querySelector('.progress');

window.addEventListener('scroll', () => {
    const html = document.documentElement.scrollHeight;

    const scrollTop = window.scrollY;

    const pageHeight = html - window.innerHeight;

    const barra = (scrollTop / pageHeight) * 100;

    progress.style.width = `${barra}%`;

    console.log(barra);
});