/* ---- Navigation Bar Function ---- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

/* ---- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ---- */
window.addEventListener("scroll", headerShadow);

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ---- TYPING EFFECT ---- */
new Typed(".typedText", {
  strings: [
    "Full Stack Developer", "Java Developer", "Frontend Developer", "Backend Developer", "Web Developer", "React Developer","Spring Boot Developer", "Full Stack Java Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const scrollRevealConfig = {
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
};

const sr = ScrollReveal(scrollRevealConfig);

/* -- HOME -- */
sr.reveal(".featured-text-card");
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header");

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
const srLeft = ScrollReveal({
  ...scrollRevealConfig,
  origin: "left",
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  ...scrollRevealConfig,
  origin: "right",
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(
      `.nav-menu a[href*=${sectionId}]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link");
    } else {
      sectionLink.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);



function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:premlond514@gmail.com?subject=Contact from Portfolio Website&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.location.href = mailtoLink;
}
