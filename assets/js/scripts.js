document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-btn"); // Hamburger button
    const overlay = document.getElementById("overlay");
    const menuItems = document.querySelectorAll(".overlay-content a"); // Menu links
    const overlayLogo = document.getElementById("overlay-logo"); // Logo inside overlay
    const overlayBackdrop = document.getElementById("overlay-backdrop"); // Clickable black area
    const body = document.body;

    function isMobile() {
        return window.innerWidth <= 1236;
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

    // Only the hamburger button toggles the overlay now
    hamburger.addEventListener("click", toggleOverlay); // Open overlay when clicking hamburger
    overlayLogo.addEventListener("click", closeOverlay); // Close overlay when clicking overlay logo
    overlayBackdrop.addEventListener("click", closeOverlay); // Close overlay when clicking black area

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

    // Smooth Scrolling for all menu links
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});


document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



