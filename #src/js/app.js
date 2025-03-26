import {
	cassieEvans, tlRotateIcon, applyParallax, parallaxEvans
} from './animations/animations.jsx';

parallaxEvans();
import { buildSwiper } from './layouts/build-swiper.js';
buildSwiper();
import { mainSlide, newslide, scheduSlelide } from './layouts/main-slide.js';
mainSlide('.slide-temples__body');
newslide('.news-slide'),
	scheduSlelide('.schedule-slide'),
	//* ----------------------------------------------------------------------------
	document.addEventListener('DOMContentLoaded', () => {
		const isMobile = /Mobi|Android/i.test(navigator.userAgent);
		const bgSection = document.querySelector('.bg-section');
		const parallax = document.querySelector('.parallax');
		if (!isMobile) {
			cassieEvans();
			bgSection.style.display = 'none';
		} else {
			parallax.style.display = 'none';
			bgSection.style.display = 'block';
			applyParallax('.bg-section');
		}

		setTimeout(() => {
			tlRotateIcon();
		}, 2000);
	});
