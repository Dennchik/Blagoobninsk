
//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

export function mainSlide(Slide) {
	if (Slide) {
		new Swiper(Slide, {
			speed: 800,
			spaceBetween: 0,
			loop: true,
			grabCursor: true,
			slidesPerView: 3,
			centeredSlides: true,
			breakpoints: {
				260: {
					slidesPerView: 1,
					spaceBetween: 10,
				},

				1024: {
					slidesPerView: 3,
				}
			}
		});
	}
}
export function newslide(Slide) {
	if (Slide) {
		new Swiper(Slide, {
			speed: 800,
			spaceBetween: 20,
			loop: true,
			grabCursor: true,
			slidesPerView: 4,
			centeredSlides: false,
			// autoHeight: true,
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
				}
			}
		});
	}
}

export function swiperSlelide(Slide) {
	if (Slide) {
		new Swiper(Slide, {
			speed: 800,
			spaceBetween: 20,
			// loop: true,
			grabCursor: true,
			slidesPerView: 5,
			centeredSlides: false,
			// autoHeight: true,
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
				}
			}
		});
	}
}

export function swiperPerform(Slide) {
	if (Slide) {
		new Swiper(Slide, {
			spaceBetween: 120,

			grabCursor: true,
			loop: true,
			slidesPerView: 1,
			// autoplay: {
			// delay: 1500,
			// disableOnInteraction: true,
			// },
			// mousewheel: {
			// 	invert: false,
			// },
			autoHeight: true,
			pagination: {
				el: '.blog-slider__pagination',
				clickable: true,
			}
		});
	}
}