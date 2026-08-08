/*=========================================
    DIUXA TECH HUB
    classes.js
    PART 1
=========================================*/

/*=========================
    SELECT ELEMENTS
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

const lessonCards = document.querySelectorAll(".lesson-card");

const searchInput = document.querySelector("#searchLesson");

const navLinks = document.querySelectorAll(
".sidebar nav a, .bottom-nav a"
);

const progressFill = document.querySelector(".progress-fill");

const progressText = document.querySelector(".progress-top span");


/*=========================
    CREATE OVERLAY
=========================*/

const overlay = document.createElement("div");

overlay.classList.add("overlay");

document.body.appendChild(overlay);


/*=========================
    MOBILE MENU
=========================*/

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.toggle("show");

        overlay.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if(sidebar.classList.contains("show")){

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }

        else{

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/*=========================
    CLOSE SIDEBAR
=========================*/

overlay.addEventListener("click",()=>{

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    if(icon){

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/*=========================
    ACTIVE NAVIGATION
=========================*/

const currentPage =
window.location.pathname.split("/").pop();

navLinks.forEach(link=>{

    if(link.getAttribute("href")===currentPage){

        link.classList.add("active");

    }

});


/*=========================
    SEARCH LESSONS
=========================*/

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

lessonCards.forEach(card=>{

const title =
card.querySelector("h3").textContent.toLowerCase();

const desc =
card.querySelector("p").textContent.toLowerCase();

if(

title.includes(value)

||

desc.includes(value)

){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}


/*=========================
    SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=========================
    FADE ANIMATION
=========================*/

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

lessonCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

observer.observe(card);

});


/*=========================
    SCROLL TO TOP BUTTON
=========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="scroll-top";

document.body.appendChild(topBtn);


window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";

topBtn.style.visibility="visible";

}

else{

topBtn.style.opacity="0";

topBtn.style.visibility="hidden";

}

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=========================
    END OF PART 1
=========================*/



/*=========================================
    DIUXA TECH HUB
    classes.js
    PART 2
=========================================*/

/*=========================
    LOCAL STORAGE
=========================*/

let completedLessons =
JSON.parse(localStorage.getItem("completedLessons")) || [];

let lastLesson =
localStorage.getItem("lastLesson") || null;


/*=========================
    UPDATE PROGRESS
=========================*/

function updateProgress(){

    const totalLessons = lessonCards.length;

    const completed = completedLessons.length;

    const percentage = Math.round(
        (completed / totalLessons) * 100
    );

    if(progressFill){

        progressFill.style.width = percentage + "%";

    }

    if(progressText){

        progressText.textContent =
        `${completed} / ${totalLessons} Completed`;

    }

}


/*=========================
    RESTORE COMPLETED
=========================*/

lessonCards.forEach((card,index)=>{

    const lessonId = index + 1;

    if(completedLessons.includes(lessonId)){

        card.classList.add("completed");

    }

});


updateProgress();


/*=========================
    SAVE LAST LESSON
=========================*/

lessonCards.forEach((card,index)=>{

    const button = card.querySelector("a");

    if(!button) return;

    button.addEventListener("click",(e)=>{

        const lessonId = index + 1;

        localStorage.setItem(
            "lastLesson",
            lessonId
        );

    });

});


/*=========================
    HIGHLIGHT LAST LESSON
=========================*/

if(lastLesson){

    lessonCards.forEach((card,index)=>{

        if(index + 1 == lastLesson){

            card.classList.add("current");

        }

    });

}


/*=========================
    MARK LESSON COMPLETE
=========================*/

lessonCards.forEach((card,index)=>{

    const lessonId = index + 1;

    const button = card.querySelector("a");

    if(!button) return;

    button.addEventListener("dblclick",(e)=>{

        e.preventDefault();

        if(!completedLessons.includes(lessonId)){

            completedLessons.push(lessonId);

            card.classList.add("completed");

            localStorage.setItem(

                "completedLessons",

                JSON.stringify(completedLessons)

            );

            updateProgress();

        }

    });

});


/*=========================
    CONTINUE LEARNING
=========================*/

const continueCard = document.createElement("div");

continueCard.className = "continue-learning";

if(lastLesson){

    continueCard.innerHTML = `

        <h3>
            Continue Learning
        </h3>

        <p>

            Resume Lesson ${lastLesson}

        </p>

        <button id="resumeLesson">

            Resume

        </button>

    `;

    const main = document.querySelector("main");

    if(main){

        main.insertBefore(

            continueCard,

            main.children[1]

        );

    }

}


document.addEventListener("click",(e)=>{

    if(e.target.id==="resumeLesson"){

        const lesson =

        lessonCards[lastLesson - 1];

        if(lesson){

            lesson.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });

            lesson.classList.add("current");

        }

    }

});


/*=========================
    AUTO SAVE PROGRESS
=========================*/

window.addEventListener("beforeunload",()=>{

    localStorage.setItem(

        "completedLessons",

        JSON.stringify(completedLessons)

    );

});


/*=========================
    LESSON COUNT
=========================*/

console.log(

`Total Lessons Loaded: ${lessonCards.length}`

);


/*=========================
    END OF PART 2
=========================*/


/*=========================================
    DIUXA TECH HUB
    classes.js
    PART 3
=========================================*/


/*=========================
    DARK MODE
=========================*/

const darkBtn = document.createElement("button");

darkBtn.className = "dark-mode-btn";

darkBtn.innerHTML = '<i class="fas fa-moon"></i>';

document.body.appendChild(darkBtn);

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    darkBtn.innerHTML='<i class="fas fa-sun"></i>';

}

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        darkBtn.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        darkBtn.innerHTML='<i class="fas fa-moon"></i>';

    }

});


/*=========================
    RIPPLE EFFECT
=========================*/

document.querySelectorAll("button,.lesson-card a").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const size = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        ripple.style.width = size+"px";

        ripple.style.height = size+"px";

        ripple.style.left =

        (e.offsetX-size/2)+"px";

        ripple.style.top =

        (e.offsetY-size/2)+"px";

        const oldRipple =

        this.querySelector(".ripple");

        if(oldRipple){

            oldRipple.remove();

        }

        this.appendChild(ripple);

    });

});


/*=========================
    KEYBOARD SHORTCUTS
=========================*/

document.addEventListener("keydown",(e)=>{

    // Ctrl + F
    if(e.ctrlKey && e.key==="f"){

        e.preventDefault();

        searchInput.focus();

    }

    // Escape closes menu
    if(e.key==="Escape"){

        sidebar.classList.remove("show");

        overlay.classList.remove("show");

    }

});


/*=========================
    ONLINE STATUS
=========================*/

window.addEventListener("online",()=>{

    console.log("Back Online");

});

window.addEventListener("offline",()=>{

    alert("You are currently offline.");

});


/*=========================
    PRELOAD ANIMATION
=========================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition=".6s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});


/*=========================
    PAGE TITLE
=========================*/

document.title =

"DIUXA Tech Hub | Web Development Classes";


/*=========================
    PERFORMANCE
=========================*/

console.log(

"DIUXA Classes Loaded Successfully."

);


/*=========================
    APP VERSION
=========================*/

console.log(

"Version 1.0"

);


/*=========================
    INITIALIZE
=========================*/

updateProgress();


/*=========================
    END
=========================*/