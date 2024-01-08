function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoScroll();
function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.from("#page2-part1 h2, #page2-part2 h2", {
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    y: 50,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 80%",
      end: "top 77%",
      // markers: true,
      scrub: 3,
    },
  });
  gsap.from("#page2-bottom h1 span", {
    // y: 120,
    opacity: 0,
    stagger: 0.2,
    // duration: 1,
    transform: "translateY(20%)",
    // overflow: "hidden",
    // duration: 0.5,
    // delay: 0.2,

    scrollTrigger: {
      trigger: "#page2-bottom",
      scroller: "#main",
      start: "top 65%",
      end: "top 62%",
      // markers: true,
      scrub: 3,
    },
  });
}
page2Animation();

function page3Animation() {
  gsap.from("#page3-top h2", {
    transform: "translateY(20%)",
    stagger: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3-top h2",
      scroller: "#main",
      start: "top 90%",
      end: "top 87%",
      // markers: true,
      scrub: 2,
    },
  });
}
page3Animation();

function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

sliderAnimation();
var tl = gsap.timeline();
tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader h3", {
  opacity: 0,
  x: -10,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader", {
  opacity: 0,
  display: "none",
});
tl.from("#page1-content h1 span", {
  y: 50,
  opacity: 0,
  stagger: 0.1,
  // duration: 0.5,
});
// create
let mm = gsap.matchMedia();
let tl2 = gsap.timeline();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 600px)", () => {
  tl2.from("#loader h3", {
    x: 600,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  });
  // this setup code only runs when viewport is at least 800px wide
  tl2.to("#loader h3", {
    opacity: 0,
    x: 500,
    duration: 1,
    stagger: 0.1,
  });
  tl2.to("#loader", {
    opacity: 0,
    display: "none",
  });
  tl2.from("#page1-content h1 span", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    // duration: 0.5,
  });
});

// later, if we need to revert all the animations/ScrollTriggers...
mm.revert();
