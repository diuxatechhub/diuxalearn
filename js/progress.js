/*
=========================================
DIUXA TECH HUB
progress.js
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
        COURSE DATA
    =====================================*/

    const totalLessons = 44;

    let completedLessons = Number(
        localStorage.getItem("completedLessons")
    ) || 0;

    const remainingLessons =
        totalLessons - completedLessons;

    const percent = Math.round(
        (completedLessons / totalLessons) * 100
    );

    /*=====================================
        UPDATE DASHBOARD
    =====================================*/

    const percentText =
        document.getElementById("progressPercent");

    const completedText =
        document.getElementById("completedLessons");

    const remainingText =
        document.getElementById("remainingLessons");

    const progressFill =
        document.querySelector(".progress-fill");

    const goalFill =
        document.querySelector(".goal-fill");

    const progressCircle =
        document.querySelector(".progress-circle");

    if (percentText)
        percentText.textContent = percent + "%";

    if (completedText)
        completedText.textContent = completedLessons;

    if (remainingText)
        remainingText.textContent = remainingLessons;

    if (progressFill)
        progressFill.style.width = percent + "%";

    if (goalFill) {

        const weeklyGoal =
            Math.min((completedLessons / 5) * 100, 100);

        goalFill.style.width =
            weeklyGoal + "%";

    }

    if (progressCircle) {

        progressCircle.style.background =
            `conic-gradient(
                #0057ff ${percent * 3.6}deg,
                #dbe7ff ${percent * 3.6}deg
            )`;

    }

    /*=====================================
        CONTINUE LEARNING
    =====================================*/

    const continueBtn =
        document.querySelector(".continue-btn");

    if (continueBtn) {

        continueBtn.addEventListener("click", () => {

            window.location.href = "lesson.html";

        });

    }

    /*=====================================
        ANIMATE CHART
    =====================================*/

    const bars =
        document.querySelectorAll(".bar");

    bars.forEach((bar, index) => {

        const finalHeight = bar.style.height;

        bar.style.height = "0";

        setTimeout(() => {

            bar.style.height = finalHeight;

        }, index * 120);

    });

    /*=====================================
        ACHIEVEMENT EFFECT
    =====================================*/

    const badges =
        document.querySelectorAll(".badge-card");

    badges.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-10px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*=====================================
        ACTIVITY EFFECT
    =====================================*/

    const activities =
        document.querySelectorAll(".activity-item");

    activities.forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.style.transform =
                "translateX(10px)";

        });

        item.addEventListener("mouseleave", () => {

            item.style.transform = "";

        });

    });

    /*=====================================
        FLOATING SCROLL BUTTON
    =====================================*/

    const scrollBtn =
        document.createElement("button");

    scrollBtn.innerHTML =
        '<i class="fas fa-arrow-up"></i>';

    scrollBtn.className =
        "scroll-top";

    document.body.appendChild(scrollBtn);

    Object.assign(scrollBtn.style, {

        position: "fixed",
        right: "20px",
        bottom: "90px",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "none",
        background: "#0057ff",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer",
        display: "none",
        zIndex: "999",
        boxShadow: "0 10px 25px rgba(0,0,0,.2)"

    });

    window.addEventListener("scroll", () => {

        scrollBtn.style.display =
            window.scrollY > 400
                ? "block"
                : "none";

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=====================================
        SIMULATE STUDY TIME
    =====================================*/

    let studyTime = Number(
        localStorage.getItem("studyTime")
    ) || 0;

    setInterval(() => {

        studyTime++;

        localStorage.setItem(
            "studyTime",
            studyTime
        );

    }, 60000);

    /*=====================================
        DAILY STREAK
    =====================================*/

    let streak = Number(
        localStorage.getItem("learningStreak")
    ) || 1;

    console.log(
        "Current Learning Streak:",
        streak,
        "days"
    );

    /*=====================================
        SAVE PROGRESS
    =====================================*/

    localStorage.setItem(
        "courseProgress",
        percent
    );

    /*=====================================
        PAGE READY
    =====================================*/

    console.log(
        "DIUXA Progress Dashboard Loaded Successfully."
    );

});