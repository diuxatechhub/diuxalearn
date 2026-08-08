/*
=========================================
DIUXA TECH HUB
resources.js
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        MOBILE SIDEBAR
    =====================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");

    if (menuBtn && sidebar) {

        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {

            if (
                !sidebar.contains(e.target) &&
                !menuBtn.contains(e.target)
            ) {
                sidebar.classList.remove("show");
            }

        });

    }

    /*=====================================
        RESOURCE SEARCH
    =====================================*/

    const searchInput = document.getElementById("searchInput");
    const resourceCards = document.querySelectorAll(".resource-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", () => {

            const keyword = searchInput.value.toLowerCase();

            resourceCards.forEach(card => {

                const text = card.textContent.toLowerCase();

                if (text.includes(keyword)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    /*=====================================
        DOWNLOAD BUTTONS
    =====================================*/

    const downloadLinks = document.querySelectorAll(".resource-card a");

    downloadLinks.forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const resource = link.parentElement.querySelector("h3").textContent;

            alert(resource + " will start downloading once uploaded.");

        });

    });

    /*=====================================
        FEATURED DOWNLOAD
    =====================================*/

    const featuredButton = document.querySelector(".featured-content button");

    if (featuredButton) {

        featuredButton.addEventListener("click", () => {

            alert("Starter Pack will be available after upload.");

        });

    }

    /*=====================================
        ASSIGNMENT DOWNLOADS
    =====================================*/

    const assignmentButtons =
        document.querySelectorAll(".assignment-card button");

    assignmentButtons.forEach(button => {

        button.addEventListener("click", () => {

            const assignment =
                button.parentElement.querySelector("h3").textContent;

            alert(assignment + " download coming soon.");

        });

    });

    /*=====================================
        CATEGORY CARD EFFECT
    =====================================*/

    const categories =
        document.querySelectorAll(".category-card");

    categories.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*=====================================
        RESOURCE CARD EFFECT
    =====================================*/

    resourceCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*=====================================
        SMOOTH BUTTON EFFECT
    =====================================*/

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("mousedown", () => {

            button.style.transform = "scale(.96)";

        });

        button.addEventListener("mouseup", () => {

            button.style.transform = "";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    /*=====================================
        SCROLL TO TOP
    =====================================*/

    const scrollBtn = document.createElement("button");

    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

    scrollBtn.className = "scroll-top";

    document.body.appendChild(scrollBtn);

    scrollBtn.style.position = "fixed";
    scrollBtn.style.right = "20px";
    scrollBtn.style.bottom = "90px";
    scrollBtn.style.width = "50px";
    scrollBtn.style.height = "50px";
    scrollBtn.style.border = "none";
    scrollBtn.style.borderRadius = "50%";
    scrollBtn.style.background = "#0057ff";
    scrollBtn.style.color = "#fff";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "999";
    scrollBtn.style.fontSize = "18px";
    scrollBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollBtn.style.display = "block";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=====================================
        PAGE LOADED
    =====================================*/

    console.log("DIUXA Resources Loaded Successfully.");

});