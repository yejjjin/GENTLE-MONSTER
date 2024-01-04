// slide
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide-autoscroll", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 1.5,
    autoScroll: {
      speed: 1,
    },
  });

  splide.mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
  var splideOptions = {
    type: "loop",
    drag: "free",
    focus: "center",
    autoScroll: {
      speed: 1,
    },
  };

  // Check screen width and set perPage accordingly
  if (window.innerWidth >= 1280) {
    splideOptions.perPage = 0.8;
  } else {
    splideOptions.perPage = 1.5;
  }

  var splide = new Splide("#splide-autoscroll", splideOptions);

  // Additional configuration or methods for the Splide instance can be added here.

  splide.mount(); // Mounts the Splide instance after configuration.
});

// best seller
var swiper = new Swiper(".best-slide", {
  slidesPerView: 2,
  spaceBetween: 40,
  freeMode: true,
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// $(document).ready(function () {
//   $("#flip").click(function () {
//     $("#panel").slideToggle("slow");
//   });
// });

// ft-txt
document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".marquee-track.l h1", {
    scrollTrigger: {
      trigger: ".marquee-track.l h1",
      start: "top bottom",
      end: "400% top",
      scrub: 0.6,
    },
    xPercent: 25,
    duration: 3,
    ease: "linear",
  });

  gsap.to(".marquee-track.r h1", {
    scrollTrigger: {
      trigger: ".marquee-track.r h1",
      end: "bottom top",
      scrub: 0.6,
    },
    xPercent: -25,
    duration: 3,
    ease: "linear",
  });
});

// brandissue
document.addEventListener("DOMContentLoaded", function () {
  const scrollPanels = document.querySelectorAll(
    ".horizontal-scroll .horizontal-panel"
  );
  const pinPanels = document.querySelectorAll(
    ".horizontal-pin .horizontal-panel"
  );
  const horizontalScroll = document.querySelector(".horizontal-scroll");

  gsap.to(scrollPanels, {
    xPercent: -100 * (scrollPanels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll",
      pin: true,
      scrub: 0.6,
      markers: true,
      end: () => `+=${horizontalScroll.offsetWidth * scrollPanels.length}`,
    },
  });

  pinPanels.forEach((panel) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        pin: true,
        pinSpacing: false,
        start: "top top",
      },
    });
  });
});
