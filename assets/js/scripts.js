document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo"); // Navbar logo
    const overlay = document.getElementById("overlay");
    const menuItems = document.querySelectorAll(".overlay-content a"); // All menu links
    const overlayLogo = document.getElementById("overlay-logo"); // Logo inside overlay
    const overlayBackdrop = document.getElementById("overlay-backdrop"); // Clickable black area
    const body = document.body;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function toggleOverlay() {
        if (isMobile()) {
            overlay.classList.toggle("active");
            body.style.overflow = overlay.classList.contains("active") ? "hidden" : ""; // Disable scrolling
        }
    }

    function closeOverlay() {
        if (isMobile()) {
            overlay.classList.remove("active");
            body.style.overflow = ""; // Re-enable scrolling
        }
    }

    logo.addEventListener("click", toggleOverlay);
    overlayLogo.addEventListener("click", closeOverlay);
    overlayBackdrop.addEventListener("click", closeOverlay); // Close when clicking black area

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            if (isMobile()) {
                event.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                    setTimeout(closeOverlay, 400); // Close after scrolling
                }
            }
        });
    });
});
