
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
				},
				// 	// 	491: {
				// 	// 		slidesPerView: 2,
				// 	// 	},

				1024: {
					slidesPerView: 3,
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