//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

const swiperModules = [Navigation, Pagination];
export function swiperPerform(Slide) {
  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );
  if (Slide) {
    const todayIndex = new Date().getDay(); // 0 — воскресенье, 1 — понедельник, ..., 6 — суббота
    const cursor = document.querySelector('.slide-perform');
    new Swiper(Slide, {
      // speed: 800,
      modules: swiperModules,
      spaceBetween: 20,
      lazy: true,
      mousewheel: false,
      effect: 'fade',
      // grabCursor: true,
      initialSlide: todayIndex, // <-- добавили эту строку
      on: {
        touchStart: () => cursor.classList.add('is-grabbing'),
        touchEnd: () => cursor.classList.remove('is-grabbing'),
      },
      // loop: true,
      // slidesPerView: 1,
      // autoplay: {
      // 	delay: 1500,
      // 	disableOnInteraction: true,
      // },
      // mousewheel: isMobile
      //   ? false
      //   : {
      //       invert: false,
      //     },
      pagination: {
        el: '.perform-slide__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide-perform-next',
        prevEl: '.slide-perform-prev ',
      },
    });
  }
}

export function newsSlide(Slide) {
  if (Slide) {
    new Swiper(Slide, {
      modules: swiperModules,
      speed: 800,
      spaceBetween: 20,
      // loop: true,
      grabCursor: true,
      slidesPerView: 4,
      centeredSlides: false,
      navigation: {
        nextEl: '.news-slide-next',
        prevEl: '.news-slide-prev',
      },
      breakpoints: {
        260: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      },
    });
  }
}

export function templesSlide(Slide) {
  if (Slide) {
    new Swiper(Slide, {
      modules: swiperModules,
      speed: 800,
      spaceBetween: 0,
      loop: true,
      grabCursor: true,
      slidesPerView: 3,
      centeredSlides: true,
      navigation: {
        nextEl: '.slide-temples__button-next',
        prevEl: '.slide-temples__button-prev',
      },
      breakpoints: {
        260: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
}

export function websiteSlide(Slide) {
  if (Slide) {
    new Swiper(Slide, {
      modules: swiperModules,
      speed: 800,
      spaceBetween: 20,
      // loop: true,
      grabCursor: true,
      slidesPerView: 5,
      centeredSlides: false,
      navigation: {
        nextEl: '.slide-website-next',
        prevEl: '.slide-website-prev',
      },
      breakpoints: {
        260: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        490: {
          slidesPerView: 2,
        },
        691: {
          slidesPerView: 3,
        },
        1241: {
          slidesPerView: 4,
        },
        1640: {
          slidesPerView: 5,
        },
      },
    });
  }
}

export function slideSchedule(Slide) {
  if (Slide) {
    const todayIndex = new Date().getDay(); // 0 — воскресенье, 1 — понедельник, ..., 6 — суббота
    new Swiper(Slide, {
      modules: swiperModules,
      speed: 800,
      // loop: true,
      spaceBetween: 20,
      grabCursor: true,
      initialSlide: todayIndex, // <-- добавили эту строку

      centeredSlides: false,
      navigation: {
        nextEl: '.slide-schedule-next',
        prevEl: '.slide-schedule-prev',
      },
      breakpoints: {
        260: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        490: {
          slidesPerView: 2,
        },
        691: {
          slidesPerView: 3,
        },
        1241: {
          slidesPerView: 4,
        },
        1640: {
          slidesPerView: 5,
        },
      },
    });
  }
}
