document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('[data-section]');
  const fears = document.querySelector('.fears');
  const burgerMenu = document.querySelector('.burger-menu');
  const overlay = document.querySelector('.overlay');
  const mobileMenu = document.querySelector('.nav-menu__list');

  const toggleFear = (e) => {
    const target = e.target;
    if (target.closest('.fear__item-name')) {
      target.parentElement.classList.toggle('active');
    }
  };

  const toggleBurgerMenu = () => {
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('lock');
  };

  const clickToLinkMenu = (e) => {
    if (e.target.closest('.nav-menu__link')) {
      toggleBurgerMenu();
    }
  };

  burgerMenu.addEventListener('click', toggleBurgerMenu);
  mobileMenu.addEventListener('click', clickToLinkMenu);
  overlay.addEventListener('click', toggleBurgerMenu);
  fears.addEventListener('click', toggleFear);

  // slider
  const swiper = new Swiper('.swiper', {
    // slidesPerView: 3,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',

    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      900: {
        // slidesPerView: 3,
        // spaceBetween: 40
      },
      320: {
        // slidesPerView: 1,
        // spaceBetween: 40
      },
    },
  });

  //  navigat header links to the sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('data-section');
        const button = document.querySelector(`[data-link="${sectionId}"]`);

        if (entry.isIntersecting) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    },
    {
      rootMargin: '-100px 0px -80%',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
