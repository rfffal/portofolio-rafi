/* ==========================================================
   RAFI ALI AKBAR PORTFOLIO
   SCRIPT.JS
   PART 1
========================================================== */

/* ==========================
   AOS
========================== */

AOS.init({

    duration:900,

    once:true,

    easing:"ease-in-out"

});

/* ==========================
   SELECTOR
========================== */

const body=document.body;

const progress=document.getElementById("progress-bar");

const backToTop=document.getElementById("backToTop");

const themeToggle=document.getElementById("themeToggle");

const mobileMenu=document.getElementById("mobileMenu");

const navMenu=document.querySelector(".nav-menu");

/* ==========================
   STICKY HEADER
========================== */

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/* ==========================
   SCROLL PROGRESS
========================== */

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progressHeight=

(window.pageYOffset/totalHeight)*100;

progress.style.width=

progressHeight+"%";

});

/* ==========================
   BACK TO TOP
========================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>450){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
   DARK MODE
========================== */

const savedTheme=

localStorage.getItem("theme");

if(savedTheme==="dark"){

body.classList.add("dark");

themeToggle.innerHTML=

'<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click",()=>{

body.classList.toggle("dark");

if(body.classList.contains("dark")){

localStorage.setItem(

"theme",

"dark"

);

themeToggle.innerHTML=

'<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem(

"theme",

"light"

);

themeToggle.innerHTML=

'<i class="fa-solid fa-moon"></i>';

}

});

/* ==========================
   SYSTEM THEME
========================== */

if(

!savedTheme &&

window.matchMedia("(prefers-color-scheme: dark)").matches

){

body.classList.add("dark");

themeToggle.innerHTML=

'<i class="fa-solid fa-sun"></i>';

}

/* ==========================
   MOBILE MENU
========================== */

mobileMenu.addEventListener("click",()=>{

navMenu.classList.toggle("active");

mobileMenu.classList.toggle("active");

});

/* ==========================
   CLOSE MOBILE MENU
========================== */

document

.querySelectorAll(".nav-menu a")

.forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

mobileMenu.classList.remove("active");

});

});

/* ==========================
   SMOOTH ACTIVE NAV
========================== */

const sections=

document.querySelectorAll("section");

const navLinks=

document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=

section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

/* ==================================================
   JAVASCRIPT PART 2
   Portfolio Enhancement
================================================== */



/* ===============================
   SCROLL REVEAL ANIMATION
================================ */


const revealElements = document.querySelectorAll(
    ".section, .competency-card, .stat-card, .summary-card"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold:0.15
    }
);



revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});






/* ===============================
   ACTIVE NAVIGATION LINK
================================ */


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(
    ".nav-link"
);



window.addEventListener(
    "scroll",
    ()=>{


        let current="";


        sections.forEach(section=>{


            const sectionTop =
            section.offsetTop - 120;


            const sectionHeight =
            section.clientHeight;



            if(
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ){

                current =
                section.getAttribute("id");

            }


        });



        navLinks.forEach(link=>{


            link.classList.remove("active");


            if(
                link.getAttribute("href")
                === "#" + current
            ){

                link.classList.add("active");

            }


        });



    }
);







/* ===============================
   TYPING EFFECT HERO
================================ */


const typingText =
document.querySelector(".typing-text");


if(typingText){


const textArray = [

    "Human Resources Enthusiast",
    "Agrotechnology Graduate",
    "People Development Professional",
    "Future Management Trainee"

];


let textIndex = 0;
let charIndex = 0;
let deleting = false;



function typingAnimation(){


let currentText =
textArray[textIndex];



if(!deleting){


typingText.textContent =
currentText.substring(
0,
charIndex++
);



if(charIndex > currentText.length){

    deleting=true;

    setTimeout(
        typingAnimation,
        1500
    );

    return;

}



}else{


typingText.textContent =
currentText.substring(
0,
charIndex--
);



if(charIndex < 0){

    deleting=false;

    textIndex++;

    if(textIndex >= textArray.length){

        textIndex=0;

    }


}


}


setTimeout(
    typingAnimation,
    deleting ? 50 : 100
);



}


typingAnimation();


}







/* ===============================
   SCROLL PROGRESS BAR
================================ */



const progressBar =
document.querySelector(
".scroll-progress"
);



window.addEventListener(
"scroll",
()=>{


if(progressBar){


let scrollTop =
document.documentElement.scrollTop;


let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;



let progress =
(scrollTop / height) * 100;



progressBar.style.width =
progress + "%";


}


});







/* ===============================
   FOOTER CURRENT YEAR
================================ */


const yearElement =
document.querySelector(
"#current-year"
);



if(yearElement){

yearElement.textContent =
new Date().getFullYear();

}







/* ===============================
   CARD MICRO INTERACTION
================================ */


const cards =
document.querySelectorAll(
".competency-card, .project-card, .experience-card"
);



cards.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{

card.style.transform =
"translateY(-10px)";

}
);



card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"translateY(0)";

}

);


});







/* ===============================
   MOBILE MENU CLOSE
================================ */


const mobileLinks =
document.querySelectorAll(
".nav-link"
);


const menuToggle =
document.querySelector(
".menu-toggle"
);


const navMenu =
document.querySelector(
".nav-menu"
);



mobileLinks.forEach(link=>{


link.addEventListener(
"click",
()=>{


if(
navMenu &&
navMenu.classList.contains("show")
){

navMenu.classList.remove(
"show"
);


if(menuToggle){

menuToggle.classList.remove(
"active"
);

}


}


});



});

/* ==================================================
   JAVASCRIPT PART 3
   Advanced Portfolio Interaction
================================================== */



/* ===============================
   PROJECT FILTER SYSTEM
================================ */


const filterButtons =
document.querySelectorAll(".filter-btn");


const projectCards =
document.querySelectorAll(".project-card");



filterButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


const filter =
button.dataset.filter;



filterButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



projectCards.forEach(card=>{


const category =
card.dataset.category;



if(
filter === "all" ||
category === filter
){

card.style.display =
"block";


setTimeout(()=>{

card.style.opacity="1";
card.style.transform="scale(1)";

},100);



}else{


card.style.opacity="0";

card.style.transform=
"scale(.8)";


setTimeout(()=>{

card.style.display="none";

},300);



}


});



});


});







/* ===============================
   EXPERIENCE TIMELINE ANIMATION
================================ */



const timelineItems =
document.querySelectorAll(
".timeline-item"
);



const timelineObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},
{
threshold:0.2
}
);



timelineItems.forEach(item=>{

item.classList.add(
"hidden"
);


timelineObserver.observe(item);


});







/* ===============================
   DOWNLOAD CV BUTTON
================================ */



const downloadCV =
document.querySelector(
"#download-cv"
);



if(downloadCV){


downloadCV.addEventListener(
"click",
()=>{


const file =
"assets/CV-Rafi-Ali-Akbar.pdf";



const link =
document.createElement(
"a"
);



link.href=file;

link.download=
"CV-Rafi-Ali-Akbar.pdf";


document.body.appendChild(link);


link.click();


document.body.removeChild(link);



});


}







/* ===============================
   CONTACT FORM VALIDATION
================================ */



const contactForm =
document.querySelector(
"#contact-form"
);



if(contactForm){


contactForm.addEventListener(
"submit",
function(e){


e.preventDefault();



const name =
document.querySelector(
"#name"
).value.trim();



const email =
document.querySelector(
"#email"
).value.trim();



const message =
document.querySelector(
"#message"
).value.trim();





if(
name === "" ||
email === "" ||
message === ""
){


alert(
"Please complete all fields."
);


return;


}




const mailURL =
`mailto:rafialihakbar@gmail.com?
subject=Portfolio Contact From ${name}
&body=${message}
`;



window.location.href =
mailURL;



});



}







/* ===============================
   COPY EMAIL BUTTON
================================ */


const copyEmail =
document.querySelector(
"#copy-email"
);



if(copyEmail){


copyEmail.addEventListener(
"click",
()=>{


const email =
"rafialihakbar@gmail.com";



navigator.clipboard.writeText(
email
);



copyEmail.innerHTML =
"✓ Email Copied";



setTimeout(()=>{


copyEmail.innerHTML =
"Copy Email";


},2000);



});


}







/* ===============================
   BACK TO TOP BUTTON
================================ */


const backTop =
document.querySelector(
"#back-to-top"
);



if(backTop){



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){


backTop.classList.add(
"show"
);


}else{


backTop.classList.remove(
"show"
);


}


});




backTop.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}







/* ===============================
   PAGE LOADING EFFECT
================================ */



window.addEventListener(
"load",
()=>{


const loader =
document.querySelector(
".loader"
);



if(loader){


loader.classList.add(
"hide"
);



setTimeout(()=>{


loader.remove();


},700);



}



});

/* ==================================================
   JAVASCRIPT PART 4
   SEO + PERFORMANCE + SECURITY ENHANCEMENT
================================================== */





/* ===============================
   DYNAMIC SEO META UPDATE
================================ */


const pageTitle =
document.querySelector("title");


if(pageTitle){

pageTitle.textContent =
"Rafi Ali Akbar | Agrotechnology Graduate | HR & Management Trainee";


}



const metaDescription =
document.querySelector(
'meta[name="description"]'
);



if(metaDescription){


metaDescription.setAttribute(
"content",
"Rafi Ali Akbar - Agrotechnology graduate from Universitas Padjadjaran with experience in Human Resources, People Development, Recruitment, Research, and Sustainable Agriculture."
);


}







/* ===============================
   JSON-LD PERSONAL BRAND SCHEMA
================================ */


const schemaData = {

"@context":
"https://schema.org",


"@type":
"Person",


"name":
"Rafi Ali Akbar",


"url":
window.location.href,


"jobTitle":
"Agrotechnology Graduate | HR Enthusiast",


"alumniOf":{

"@type":
"CollegeOrUniversity",

"name":
"Universitas Padjadjaran"

},


"knowsAbout":[

"Human Resources",

"Recruitment",

"People Development",

"Agrotechnology",

"Sustainable Agriculture",

"Leadership"

]


};



const schemaScript =
document.createElement(
"script"
);


schemaScript.type =
"application/ld+json";


schemaScript.textContent =
JSON.stringify(schemaData);



document.head.appendChild(
schemaScript
);







/* ===============================
   IMAGE LAZY LOADING
================================ */


const images =
document.querySelectorAll(
"img"
);



images.forEach(image=>{


if(
!image.hasAttribute(
"loading"
)
){


image.setAttribute(
"loading",
"lazy"
);


}



image.addEventListener(
"error",
()=>{


image.style.display =
"none";


});


});







/* ===============================
   EXTERNAL LINK SECURITY
================================ */


const externalLinks =
document.querySelectorAll(
'a[target="_blank"]'
);



externalLinks.forEach(link=>{


link.setAttribute(
"rel",
"noopener noreferrer"
);



});







/* ===============================
   SIMPLE VISITOR TRACKING
================================ */


function trackInteraction(action){


const data = {

action:action,

page:
window.location.pathname,

time:
new Date()
.toISOString()


};



console.log(
"Portfolio Analytics:",
data
);



}





document.querySelectorAll(
"button"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


trackInteraction(
"Button Click: " +
button.innerText
);


});


});







/* ===============================
   READING PROGRESS INDICATOR
================================ */


const readingBar =
document.querySelector(
".reading-progress"
);



window.addEventListener(
"scroll",
()=>{


if(readingBar){



const totalHeight =
document.body.scrollHeight -
window.innerHeight;



const progress =
(window.scrollY /
totalHeight)
*
100;



readingBar.style.width =
progress + "%";



}


});







/* ===============================
   ACCESSIBILITY IMPROVEMENT
================================ */


document.querySelectorAll(
"button, a"
)
.forEach(element=>{


element.addEventListener(
"keydown",
(event)=>{


if(
event.key === "Enter"
){

element.click();


}



});


});







/* ===============================
   CURRENT URL SHARING
================================ */


const shareButton =
document.querySelector(
"#share-profile"
);



if(shareButton){



shareButton.addEventListener(
"click",
async()=>{


if(
navigator.share
){


await navigator.share({

title:
"Rafi Ali Akbar Portfolio",

text:
"Professional portfolio of Rafi Ali Akbar",

url:
window.location.href


});


}else{


navigator.clipboard.writeText(
window.location.href
);


alert(
"Portfolio link copied!"
);


}



});


}







/* ===============================
   PERFORMANCE OPTIMIZATION
================================ */



window.addEventListener(
"load",
()=>{


setTimeout(()=>{


document.body.classList.add(
"loaded"
);



},500);



});







/* ===============================
   PREVENT IMAGE DRAG
================================ */


document.querySelectorAll(
"img"
)
.forEach(img=>{


img.addEventListener(
"dragstart",
event=>{

event.preventDefault();

}

);


});







/* ===============================
   CONSOLE BRAND MESSAGE
================================ */


console.log(
`
=================================

Rafi Ali Akbar Portfolio
Personal Branding Website

Built with:
HTML + CSS + JavaScript

=================================
`
);

/* ==================================================
   JAVASCRIPT PART 5
   FINAL UX POLISH + SMART INTERACTION
================================================== */





/* ===============================
   SAVE THEME PREFERENCE
================================ */


const themeToggle =
document.querySelector(
"#theme-toggle"
);



if(themeToggle){


const savedTheme =
localStorage.getItem(
"portfolio-theme"
);



if(savedTheme){

document.body.dataset.theme =
savedTheme;


}




themeToggle.addEventListener(
"click",
()=>{


let currentTheme =
document.body.dataset.theme;



let newTheme =
currentTheme === "dark"
? "light"
: "dark";



document.body.dataset.theme =
newTheme;



localStorage.setItem(
"portfolio-theme",
newTheme
);



});


}







/* ===============================
   TIME BASED GREETING
================================ */


const greetingElement =
document.querySelector(
"#visitor-greeting"
);



if(greetingElement){


const hour =
new Date()
.getHours();



let greeting;



if(hour >=5 && hour <12){

greeting =
"Good Morning 👋";

}

else if(hour >=12 && hour <18){

greeting =
"Good Afternoon 👋";

}

else{

greeting =
"Good Evening 👋";

}



greetingElement.textContent =
greeting;



}







/* ===============================
   MINI PORTFOLIO ASSISTANT
================================ */



const assistantButton =
document.querySelector(
"#assistant-button"
);



const assistantBox =
document.querySelector(
"#assistant-box"
);



const assistantResponse =
document.querySelector(
"#assistant-response"
);



const assistantOptions =
document.querySelectorAll(
".assistant-option"
);



if(
assistantButton &&
assistantBox
){


assistantButton.addEventListener(
"click",
()=>{


assistantBox.classList.toggle(
"show"
);


});


}





const assistantAnswers = {


experience:

"I have experience in People & Culture, recruitment assessment, agricultural internship, laboratory assistance, and organizational leadership.",



education:

"I graduated from Agrotechnology at Universitas Padjadjaran with research focus on sustainable agriculture and soil fertility.",



skill:

"My core skills include Human Resources, recruitment, leadership, communication, research, Canva design, Microsoft Office, and data analysis.",



career:

"I am interested in Human Resources, Management Trainee programs, People Development, and business improvement roles."



};





assistantOptions.forEach(option=>{


option.addEventListener(
"click",
()=>{


const question =
option.dataset.question;



assistantResponse.textContent =
assistantAnswers[question];



});


});







/* ===============================
   MOUSE PARALLAX EFFECT
================================ */


const heroImage =
document.querySelector(
".hero-image"
);



if(heroImage){


document.addEventListener(
"mousemove",
(event)=>{


const x =
(event.clientX /
window.innerWidth - 0.5)
* 20;



const y =
(event.clientY /
window.innerHeight - 0.5)
* 20;



heroImage.style.transform =
`
translate(${x}px, ${y}px)
`;



});


}







/* ===============================
   BUTTON CLICK FEEDBACK
================================ */


const buttons =
document.querySelectorAll(
"button"
);



buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


button.classList.add(
"clicked"
);



setTimeout(()=>{


button.classList.remove(
"clicked"
);



},200);



});


});







/* ===============================
   ACTIVE YEAR EXPERIENCE
================================ */



const experienceYear =
document.querySelectorAll(
".experience-year"
);



experienceYear.forEach(year=>{


year.addEventListener(
"mouseenter",
()=>{


year.style.transform =
"scale(1.08)";


});



year.addEventListener(
"mouseleave",
()=>{


year.style.transform =
"scale(1)";


});


});







/* ===============================
   EASTER EGG
================================ */


let keySequence = "";



document.addEventListener(
"keydown",
(event)=>{


keySequence +=
event.key.toLowerCase();



if(
keySequence.includes(
"rafi"
)
){


console.log(
"🚀 Welcome to Rafi Ali Akbar Portfolio"
);



keySequence="";


}



if(
keySequence.length > 20
){

keySequence="";


}



});







/* ===============================
   FINAL WEBSITE READY MESSAGE
================================ */


window.addEventListener(
"load",
()=>{


console.log(
`
====================================
Portfolio Optimization Complete ✅

Name:
Rafi Ali Akbar

Status:
Professional Portfolio Website Ready

Focus:
HR | Management Trainee | Leadership
Agrotechnology | Sustainability

====================================
`
);


});

});
