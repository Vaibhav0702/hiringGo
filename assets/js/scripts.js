
console.log("JavaScript Loaded");

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Number of slides visible at once
    spaceBetween: 10, // Space between slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true, // Enable looping
  });
  