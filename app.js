const mobileMenu = document.querySelector('#mobile-menu');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
})