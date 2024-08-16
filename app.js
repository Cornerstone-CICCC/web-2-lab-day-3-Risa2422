gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

// section1
const section1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "top",
    end: "bottom",
  },
});

section1
  .from(".section1 span:last-child", { x: "100vw", duration: 0.5 })
  .from(".section1 span:first-child", { x: "-100vw", duration: 0.5 })
  .fromTo(
    ".section1 p",
    { transformOrigin: "left center", opacity: 0, rotate: 90 },
    { opacity: 1, rotate: 0, duration: 1 }
  )
  .from(".section1 img", { y: "100vh", duration: 0.5 });

// section2
const section2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 20%",
    end: "bottom",
  },
});

section2
  .from(".section2 span:first-child", { y: "-100vh", duration: 0.7 })
  .from(".section2 span:last-child", { y: "-100vh", duration: 0.7 })
  .from(".section2 p", { opacity: 0, duration: 0.7 });

const horizontalSections = document.querySelectorAll(
  ".horizontal-sections section"
);

gsap.to(horizontalSections, {
  xPercent: -100 * (horizontalSections.length - 1),
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top",
    end: "bottom",
    scrub: 1,
    pin: true,
  },
});

// section3
const section3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top",
    end: "bottom",
  },
});

section3
  .from(".section3 h2", {
    x: "-100%",
    duration: 0.7,
  })
  .fromTo(
    ".section3 span",
    {
      y: "100vh",
    },
    {
      backgroundColor: "white",
      color: "black",
      y: "0%",
      stagger: 1,
    }
  );

// section4
const section4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "bottom center",
    end: "bottom center",
  },
});

section4.from(".portfolio-item", {
  x: "100vw",
  stagger: 0.2,
  duration: 1,
});

// section5
const section5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top",
    end: "bottom",
    pin: true,
  },
});

// get each letter
const letter = document.querySelector(".section5 h2");
const sectionWrap = document.querySelector(".section5");
const newArr = letter.textContent.split("");

const newDiv = document.createElement("div");
newDiv.classList.add("contact-message");
let element1 = "";
newArr.forEach((element) => {
  if (element === " ") {
    element1 += `<span>&nbsp</span>`;
  } else {
    element1 += `<span>${element}</span>`;
  }
});
letter.innerHTML = element1;

section5
  .from(".section5 span", { y: "-100vh", stagger: 0.2 })
  .from(".section5 p", { y: "-100vh", opacity: 0, duration: 0.7 })
  .fromTo(
    ".contact-btn",
    { scale: 0, duration: 1, opacity: 0 },
    { scale: 1, opacity: 1 }
  )
  .to(".section5", { backgroundColor: "black" })
  .from(".section5", { backgroundPosition: "150% 90%", duration: 1 });
