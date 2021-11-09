function handleMenu() {
    navList.classList.toggle('hidden')
    nav.classList.toggle('hidden')
}

nav.addEventListener('click', handleMenu);
navClose.addEventListener('click', handleMenu);