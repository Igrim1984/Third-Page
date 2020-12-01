const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.main-nav')

console.log(burger, nav);

burger.addEventListener('click', () => {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove ('hidden');
        nav.classList.add('nav-small')

    } else {
        nav.classList.add('hidden');
        nav.classList.remove('nav-small');
    }
})
