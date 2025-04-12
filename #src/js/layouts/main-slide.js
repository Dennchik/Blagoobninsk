
//* import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';


export function swiperPerform(Slide) {
	if (Slide) {
		const todayIndex = new Date().getDay(); // 0 — воскресенье, 1 — понедельник, ..., 6 — суббота
		new Swiper(Slide, {
			// speed: 800,
			spaceBetween: 20,
			effect: 'fade',
			grabCursor: true,
			initialSlide: todayIndex, // <-- добавили эту строку
			// loop: true,
			// slidesPerView: 1,
			// autoplay: {
			// 	delay: 1500,
			// 	disableOnInteraction: true,
			// },
			// mousewheel: {
			// 	invert: false,
			// }, 
			pagination: {
				el: '.perform-slide__pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.slide-perform-next',
				prevEl: '.slide-perform-prev ',
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
				}
			}
		});
	}
}

export function templesSlide(Slide) {
	if (Slide) {
		new Swiper(Slide, {
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
				}
			}
		});
	}
}

export function websiteSlelide(Slide) {
	if (Slide) {
		new Swiper(Slide, {
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
				}
			}
		});
	}
}

export function slideSchedule(Slide) {
	const todayIndexSlide = new Date().getDay(); // 0 — воскресенье, 1 — понедельник, ..., 6 — суббота
	if (Slide) {
		new Swiper(Slide, {
			speed: 800,
			spaceBetween: 20,
			grabCursor: true,
			initialSlide: todayIndexSlide, // <-- добавили эту строку
			slidesPerView: 5,
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
				}
			}
		});
	}
}
