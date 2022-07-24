const screenWidth = window.screen.width;

if (screenWidth <= 768) {
  let swiper = new Swiper(".benefits__swiper", {
    slidesPerView: 1.3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}