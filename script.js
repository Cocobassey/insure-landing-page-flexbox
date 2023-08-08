const menu = document.querySelector(".mobile-menu");
const menuItems = document.querySelectorAll(".menu_item"); // Corrected class selector
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeBtn.style.display = "block";
        openBtn.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menu_item) {
    menu_item.addEventListener("click", toggleMenu);
});
