function menu() {
    var menu = document.getElementById("menu");
    var hamburger = document.getElementById("hamburger");
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        hamburger.classList.remove('fa-hamburger');
        hamburger.classList.add('fas', 'fa-times-circle', 'fa-2x', 'menu-open');
    } else {
        menu.style.display = 'none';
        hamburger.classList.remove('fa-times-circle');
        hamburger.classList.add('fa-hamburger');
    }
}
function submenu(num) {
    const submenuAnchor = document.querySelectorAll(".sub-menu-anchor");
    const theSubMenus = document.querySelectorAll(".sub-menu");
        if (theSubMenus[num].style.display != 'block') {
            theSubMenus[num].style.display = "block";
        }
        else {
            theSubMenus[num].style.display = 'none';
        }
    submenuAnchor[num].onmouseleave = function reset() {
        theSubMenus[num].style.display = "none";
    }
}