const iconBars = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
const nav = document.querySelector('.nav');

function showMenu() {
    nav.classList.toggle('active');
    iconX.classList.toggle('active');
    iconBars.classList.toggle('active');

}

iconBars.addEventListener('click', showMenu);
iconX.addEventListener('click', showMenu);