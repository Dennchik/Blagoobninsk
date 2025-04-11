import { } from './animations/animations.jsx';

import { buildSwiper } from './layouts/build-swiper.js';
buildSwiper();
import { mainSlide, newslide, swiperSlelide, swiperPerform } from './layouts/main-slide.js';
mainSlide('.slide-temples__body');
newslide('.news-slide');
swiperSlelide('.slide-swiper');
swiperPerform('.slide-perform');
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	// const textItem = document.querySelector('.hgroup-items');
	// if (textItem) {
	// 	timeLineTextItem();
	// }
	// 	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	// 	const bgSection = document.querySelector('.bg-section');
	// 	// const parallax = document.querySelector('.parallax');
	// 	if (!isMobile) {
	// 		// cassieEvans();
	// 		bgSection.style.display = 'none';
	// 	} else {
	// 		// parallax.style.display = 'none';
	// 		bgSection.style.display = 'block';
	// 		// applyParallax('.bg-section');
	// 	}

	// setTimeout(() => {
	// 	tlRotateIcon();
	// }, 2000);
});
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const todayIndex = new Date().getDay(); // Воскресенье = 0, Понедельник = 1, ..., Суббота = 6

	// Если используешь Swiper
	if (typeof swiper !== 'undefined') {
		swiper.slideTo(todayIndex); // прокрутить к нужному слайду
	}

	// Если слайдер кастомный
	const slides = document.querySelectorAll('._slide-column');
	const sliderContainer = document.querySelector('.slide-perform'); // замените на свой селектор

	if (sliderContainer && slides.length) {
		const slideWidth = slides[0].offsetWidth;
		sliderContainer.scrollLeft = slideWidth * todayIndex;
	}
});
