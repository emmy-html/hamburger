function menu() {
    var menu = document.getElementById("menu");
    var hamburger = document.getElementById("hamburger");
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
    // do the same thing but for changing the hamburger class name??
    if (hamburger.className == 'fas', 'fa-hamburger' && menu.style.display == 'block') {
        hamburger.classList.remove('fa-hamburger');
        hamburger.classList.add('fas', 'fa-times-circle', 'fa-2x', 'menu-open');
    } else {
        hamburger.classList.remove('fa-times-circle');
        hamburger.classList.add('fa-hamburger');
    }
}