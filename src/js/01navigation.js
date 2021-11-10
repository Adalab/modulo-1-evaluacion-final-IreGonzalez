function handleMenu(ev) {
    ev.preventDefault();
    navList.classList.toggle('hidden')
    nav.classList.toggle('hidden')
    nav.classList.toggle('header__navigation--link')
}

nav.addEventListener('click', handleMenu);
navClose.addEventListener('click', handleMenu);