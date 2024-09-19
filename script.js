const myText = new SplitType("#my-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.015,
  delay: 0.01,
  duration: 0.1,
  ease: "power1.out",
});


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
    delay: 2.1
  });
  tl.to(".overlay-box2", {
    duration: 1.5,
    y: "100%",
    ease: "power4.inOut",
    delay: -1.2
  });
  tl.to(".overlay-box3", {
    duration: 1.5,
    y: "100%",
    ease: "power4.inOut",
    delay: -1.2
  });

  // bottom side 
  tl.to(".bottom-overlay-box1", {
    duration: 1.5,
    x: "100%",
    ease: "power4.in",
    delay: -.6
  });
  tl.to(".bottom-overlay-box2", {
    duration: 1.5,
    x: "100%",
    ease: "power4.in",
    delay: -1.4
  });
  tl.to(".bottom-overlay-box3", {
    duration: 1.5,
    x: "100%",
    ease: "power4.in",
    delay: -1.3
  });
});



document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(CSSRulePlugin);
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", { y: 225 });

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut"
  });

  timeline.to(".menu-item p", {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out"
  }, "-=1");

  timeline.to(activeItemIndicator, {
      width: "100%",
      duration: 1,
      ease: "power4.out",
      delay: 0.5
  }, "<");

  timeline.to(".sub-nav", {
      bottom: "10%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5
  }, "<");

  toggleButton.addEventListener("click", function() {
      if (isOpen) {
          timeline.reverse();
      } else {
          timeline.play();
      }
      isOpen = !isOpen;
  });

});