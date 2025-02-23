import {
	cassieEvans, tlRotateIcon, tlVerticalOpacity
} from './animations/animations.jsx';
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	if (!isMobile) {
		cassieEvans();
		tlVerticalOpacity();
	} else {
		const parallax = document.querySelector('.parallax');
		parallax.style.opacity = '0.1';
	}
	setTimeout(() => {
		tlRotateIcon();
	}, 2000);
});
