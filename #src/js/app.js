import {
	cassieEvans, tlRotateIcon, tlVerticalOpacity, applyParallax
} from './animations/animations.jsx';
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const bgSection = document.querySelector('.bg-section');
	const parallax = document.querySelector('.parallax');
	tlVerticalOpacity();

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
