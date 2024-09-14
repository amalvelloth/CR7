const myText = new SplitType("#my-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.02,
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
});
