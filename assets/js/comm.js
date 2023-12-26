// new Swiper(".swiper-container", {
//   direction: "vertical", // 수직 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true, // 반복 재생 여부
// });

var swiper = new Swiper(".swiper-slide", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide-autoscroll", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  });

  splide.mount(window.splide.Extensions);
});
