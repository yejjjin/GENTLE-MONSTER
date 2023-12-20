new Swiper(".swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

new Splide(".splide").mount(window.splide.Extensions);
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 3,
  autoScroll: {
    speed: 1,
  },
});

splide.mount();
new Splide(".splide", {
  autoScroll: {
    speed: 2,
  },
});
