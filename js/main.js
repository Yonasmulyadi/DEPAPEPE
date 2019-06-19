let hamburgerButton = document.getElementById ('hamburger-icon');

hamburgerButton.addEventListener('click', () => {
    document.querySelector('.bar1').classList.toggle('change');
    document.querySelector('.bar2').classList.toggle('change');
    document.getElementById('navbar-menu').classList.toggle('active');
})