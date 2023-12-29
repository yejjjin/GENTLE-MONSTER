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
