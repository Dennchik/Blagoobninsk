
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
				490: {
					slidesPerView: 2,
				},
				691: {
					slidesPerView: 3,
				},
				1024: {
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
			loop: true,
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
					spaceBetween: 10,
				},
				691: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1241: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				1640: {
					slidesPerView: 5,
				}
			}
		});
	}
}
// breakpoints: {
// 	260: {
// 		slidesPerView: 1,
// 				},
// 	491: {
// 		slidesPerView: 2,
// 				},

// 	1440: {
// 		slidesPerView: 3,
// 				}
// }