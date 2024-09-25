



// GSAP
// main text animation
const myText = new SplitType("#my-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.015,
  delay: 0.01,
  duration: 0.3,
  ease: "power1.out",
});


// mouse parallax
const image = document.querySelector('.cristiano-b-w');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const xPos = (clientX / window.innerWidth) - 0.5;
  const yPos = (clientY / window.innerHeight) - 0.5;

  gsap.to(image, {
    x: xPos * 20,
    y: yPos * 20,
    ease: 'power2.out',
    duration: 0.3,
  });
});


// top reveal animation
window.addEventListener("load", function () {
  const tl = gsap.timeline({
    onComplete: function () {
      document.querySelector(".content").style.opacity = 1;
    },
  });

  tl.to(".overlay-box1", {
    duration: 1.5,
    y: "100%",
    ease: "power4.inOut",
    delay: 2.1,
  });
  tl.to(".overlay-box2", {
    duration: 1.5,
    y: "100%",
    ease: "power4.inOut",
    delay: -1.2,
  });
  tl.to(".overlay-box3", {
    duration: 1.5,
    y: "100%",
    ease: "power4.inOut",
    delay: -1.2,
  });

  // bottom side reveal animation
  tl.to(".bottom-overlay-box1", {
    duration: 1.5,
    x: "100%",
    ease: "power4.in",
    delay: -0.6,
  });
  tl.to(".bottom-overlay-box2", {
    duration: 1.5,
    x: "100%",
    ease: "power4.in",
    delay: -1.4,
  });
  tl.to(".bottom-overlay-box3", {
    duration: 1.5,
    x: "100%",
    ease: "power4.in",
    delay: -1.3,
  });
});

// menu animations
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(CSSRulePlugin);
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", { y: 225 });

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
  });

  timeline.to(
    ".menu-item p",
    {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out",
    },
    "-=1"
  );

  timeline.to(
    activeItemIndicator,
    {
      width: "100%",
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    },
    "<"
  );

  timeline.to(
    ".sub-nav",
    {
      bottom: "10%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "<"
  );

  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      timeline.reverse();
    } else {
      timeline.play();
    }
    isOpen = !isOpen;
  });
});

// cursor animation
var cursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0;
  posX = 0;
  posY = 0;

gsap.to({}, 0.01, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;

    gsap.set(cursor, {
      css: {
        left: posX,
        top: posY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
    cursor.classList.remove("grow-smaller");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    } else if (link.classList.contains("smaller")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-smaller");
    }
  });
});
