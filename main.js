const fears = document.querySelector('.fears');

console.log(fears);

const toggleFear = (e) => {
  const target = e.target;
  if (target.closest('.fear__item-name')) {
    target.parentElement.classList.toggle('active');
  }
};

fears.addEventListener('click', toggleFear);

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  autoplay: {
    delay: 5000,
  },
});
