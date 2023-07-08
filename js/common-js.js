const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  speed: 1e3,
  effect: "fade",
  // autoHeight: !0,
  autoplay: {
    delay: 3e3,
  },
  fadeEffect: {
    crossFade: !0,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 7,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
const burger = document.querySelector(".burger");
const navBar = document.querySelector(".header-bottom-bar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navBar.classList.toggle("visible");
});
