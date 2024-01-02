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
    splideOptions.perPage = 0.7;
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
