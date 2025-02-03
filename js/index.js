document.addEventListener("DOMContentLoaded", function () {
    // Gestion du menu mobile
    const mobileMenuButton = document.querySelector("button[aria-controls='mobile-menu']");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcons = mobileMenuButton.querySelectorAll("svg");
    
    mobileMenuButton.addEventListener("click", function () {
        const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "false";
        mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
        mobileMenu.classList.toggle("hidden");
        menuIcons.forEach(icon => icon.classList.toggle("hidden"));
    });
});
