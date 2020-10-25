const MENU = document.querySelector('#mobile_menu')
const MENULINKS = document.querySelector('.nav_links')

MENU.addEventListener('click', function() {
    MENU.classList.toggle('is-active')
    MENULINKS.classList.toggle('active')
})