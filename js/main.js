// =========================================
// DIUXA TECH HUB LEARNING APP
// main.js
// =========================================

// Select Elements
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const searchInput = document.querySelector(".search input");
const progressFill = document.querySelector(".progress-fill");
const moduleCards = document.querySelectorAll(".module");
const lessonCards = document.querySelectorAll(".lesson");
const navLinks = document.querySelectorAll(".sidebar nav a, .bottom-nav a");

// =========================================
// Create Mobile Sidebar Overlay
// =========================================
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// =========================================
// Mobile Sidebar Toggle
// =========================================
if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("show");
        overlay.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (sidebar.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}

overlay.addEventListener("click", () => {

    sidebar.classList.remove("show");
    overlay.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

});

// =========================================
// Progress Animation
// =========================================
window.addEventListener("load", () => {

    const targetWidth = progressFill.style.width || "27%";

    progressFill.style.width = "0";

    setTimeout(() => {

        progressFill.style.transition = "1.5s ease";
        progressFill.style.width = targetWidth;

    }, 300);

});

// =========================================
// Search Lessons
// =========================================
if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        lessonCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =========================================
// Module Card Hover Animation
// =========================================
moduleCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// =========================================
// Save Current Page
// =========================================
localStorage.setItem("lastPage", window.location.pathname);

// =========================================
// Highlight Active Navigation
// =========================================
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (href === "#" && currentPage === "")) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});

// =========================================
// Save Progress
// =========================================
let completedLessons = Number(localStorage.getItem("completedLessons")) || 12;

localStorage.setItem("completedLessons", completedLessons);

// =========================================
// Resume Last Lesson
// =========================================
lessonCards.forEach(card => {

    const button = card.querySelector("button");

    if (button) {

        button.addEventListener("click", () => {

            const lesson = card.querySelector("h3").innerText;

            localStorage.setItem("lastLesson", lesson);

            console.log("Last Lesson:", lesson);

        });

    }

});

// =========================================
// Welcome Message
// =========================================
const lastLesson = localStorage.getItem("lastLesson");

if (lastLesson) {

    console.log(`Continue learning: ${lastLesson}`);

}

// =========================================
// Fade In Animation
// =========================================
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".module, .lesson, .progress-card").forEach(item => {

    observer.observe(item);

});

// =========================================
// Smooth Scroll
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =========================================
// Install PWA
// =========================================
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    deferredPrompt = e;

    console.log("PWA Install Available");

});

// =========================================
// Online / Offline Detection
// =========================================
window.addEventListener("online", () => {

    console.log("You are back online.");

});

window.addEventListener("offline", () => {

    alert("No internet connection.");

});

// =========================================
// Ripple Button Effect
// =========================================
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.offsetX - diameter / 2}px`;

        circle.style.top = `${e.offsetY - diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

// =========================================
// End
// =========================================
console.log("DIUXA Tech Hub Learning App Loaded Successfully.");