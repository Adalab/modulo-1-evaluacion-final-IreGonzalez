'use strict';

const nav = document.querySelector('.js_nav');
const navList = document.querySelector('.js_navList');
const navClose = document.querySelector('.js_navClose');

function handleMenu(ev) {
    ev.preventDefault();
    navList.classList.toggle('hidden');
    nav.classList.toggle('hidden');
    nav.classList.toggle('header__navigation--link');
}

nav.addEventListener('click', handleMenu);
navClose.addEventListener('click', handleMenu);