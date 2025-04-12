import { smooter } from './animations/animations.jsx';
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
if (!isMobile) {
	smooter();
}
import { buildSwiper } from './layouts/build-swiper.js';
buildSwiper();
import { mainSlide, newslide, swiperSlelide, swiperPerform } from './layouts/main-slide.js';
swiperPerform('.slide-perform');
mainSlide('.slide-temples__body');
newslide('.news-slide');
swiperSlelide('.slide-swiper');
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

