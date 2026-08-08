/*
=========================================
DIUXA TECH HUB
lesson.js
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        MOBILE MENU
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
        BOOKMARK
    =====================================*/

    const bookmarkBtn = document.querySelector(".bookmark-btn");

    if (bookmarkBtn) {

        const icon = bookmarkBtn.querySelector("i");

        const saved = localStorage.getItem("lessonBookmarked");

        if (saved === "true") {

            icon.classList.remove("far");
            icon.classList.add("fas");

            bookmarkBtn.innerHTML =
                '<i class="fas fa-bookmark"></i> Bookmarked';

        }

        bookmarkBtn.addEventListener("click", () => {

            const bookmarked =
                localStorage.getItem("lessonBookmarked") === "true";

            if (bookmarked) {

                localStorage.setItem("lessonBookmarked", "false");

                bookmarkBtn.innerHTML =
                    '<i class="far fa-bookmark"></i> Bookmark';

            } else {

                localStorage.setItem("lessonBookmarked", "true");

                bookmarkBtn.innerHTML =
                    '<i class="fas fa-bookmark"></i> Bookmarked';

            }

        });

    }

    /*=====================================
        MARK LESSON COMPLETED
    =====================================*/

    const completeBtn =
        document.querySelector(".complete-btn");

    const progressFill =
        document.querySelector(".progress-fill");

    if (completeBtn && progressFill) {

        const completed =
            localStorage.getItem("lessonCompleted");

        if (completed === "true") {

            progressFill.style.width = "100%";

            completeBtn.innerHTML =
                '<i class="fas fa-circle-check"></i> Completed';

            completeBtn.disabled = true;

        }

        completeBtn.addEventListener("click", () => {

            progressFill.style.width = "100%";

            completeBtn.innerHTML =
                '<i class="fas fa-circle-check"></i> Completed';

            completeBtn.disabled = true;

            localStorage.setItem(
                "lessonCompleted",
                "true"
            );

        });

    }

    /*=====================================
        DOWNLOAD BUTTON
    =====================================*/

    const downloadBtn =
        document.querySelector(".download-btn");

    if (downloadBtn) {

        downloadBtn.addEventListener("click", () => {

            alert(
                "Lesson download will be available when resources are uploaded."
            );

        });

    }

    /*=====================================
        VIDEO WATCH PROGRESS
    =====================================*/

    let watched = Number(
        localStorage.getItem("videoProgress") || 0
    );

    if (progressFill && watched > 0 && watched < 100) {

        progressFill.style.width = watched + "%";

    }

    /*=====================================
        SIMULATE WATCHING
        (Replace with actual player API later)
    =====================================*/

    setInterval(() => {

        if (watched < 100) {

            watched++;

            localStorage.setItem(
                "videoProgress",
                watched
            );

        }

    }, 5000);

    /*=====================================
        PREVIOUS / NEXT BUTTONS
    =====================================*/

    const previous =
        document.querySelector(".previous");

    const next =
        document.querySelector(".next");

    if (previous) {

        previous.addEventListener("click", (e) => {

            e.preventDefault();

            alert("Load previous lesson.");

        });

    }

    if (next) {

        next.addEventListener("click", (e) => {

            e.preventDefault();

            alert("Load next lesson.");

        });

    }

    /*=====================================
        RESOURCE DOWNLOADS
    =====================================*/

    const resources =
        document.querySelectorAll(".resource-card a");

    resources.forEach(resource => {

        resource.addEventListener("click", (e) => {

            e.preventDefault();

            alert(
                "Resource download will begin once files are added."
            );

        });

    });

    /*=====================================
        SMOOTH BUTTON EFFECT
    =====================================*/

    const buttons =
        document.querySelectorAll("button");

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
        PAGE LOADED
    =====================================*/

    console.log(
        "DIUXA Tech Hub Lesson Loaded Successfully."
    );

});

document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {

        // Hide download option
        video.setAttribute("controlsList", "nodownload");

        // Disable Picture-in-Picture
        video.setAttribute("disablePictureInPicture", "");

        // Disable right-click on video
        video.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });

        // Prevent dragging the video
        video.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });

    });

});