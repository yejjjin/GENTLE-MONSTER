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

// best seller
var swiper = new Swiper(".swiper-slide", {
  slidesPerView: 2,
  spaceBetween: 40,
  freeMode: true,
});

// $(document).ready(function () {
//   $("#flip").click(function () {
//     $("#panel").slideToggle("slow");
//   });
// });
