var prevScrollpos = window.pageYOffset;
function hideNavbarOnScroll(){
    if (document.getElementsByClassName("navbar-hor")[0]) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementsByClassName("navbar-hor")[0].style.top = "0";
        } else {
            document.getElementsByClassName("navbar-hor")[0].style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
    }
}
function menuOnClick() {
    var navLinks = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].style.display === "inline-block") {
            navLinks[i].style.display = "none";
        } else {
            navLinks[i].style.display = "inline-block";
        }
    }

}

function addClassesInNavbar(is_small_window) {
    var navbar = document.getElementById("navbar");
    if (is_small_window.matches) {
        navbar.classList.remove("navbar-vert");
        navbar.classList.add("navbar-hor");
    } else {
        navbar.classList.remove("navbar-hor");
        navbar.classList.add("navbar-vert");
    }
}

var is_small_window = window.matchMedia("(max-width: 600px)");
addClassesInNavbar(is_small_window);
is_small_window.addListener(addClassesInNavbar);
window.addEventListener('scroll' , hideNavbarOnScroll);