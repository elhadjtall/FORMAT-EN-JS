let menuIcon = document.querySelector('#menu-icon');
page-content.classList.toggle('active');

menuIcon.onclik = () => {
    menuIcon.classList.toggle('bx-x');
    page-content.classList.toggle('active');
};
