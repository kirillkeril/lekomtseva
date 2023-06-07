menu_button = document.querySelector('.header-menu-button');
menu = document.querySelector('.header-menu');

menuHandler();

window.addEventListener('resize', () => {
    menuHandler();
});

function menuHandler() {
    if(window.innerWidth < 768) {
        menu.classList.add('menu');
        menu_button.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            if (menu.classList.contains('menu_active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        });    
    } else {
        // menu_button.style.display = 'none';
        menu.classList.remove('menu');
        // menu.classList.add('header-menu_active')
    }
}