import {
	cassieEvans, tlRotateIcon, applyParallax, animateH2, animateH3, parallaxEvans
} from './animations/animations.jsx';

parallaxEvans();

//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const bgSection = document.querySelector('.bg-section');
	const parallax = document.querySelector('.parallax');
	// tlVerticalOpacity();
	// animateH2('.tl-01');
	// animateH2('.tl-02');
	// animateH3('.tl-03');
	// animateH3('.tl-04');
	// animateH3('.tl-05');
	// animateH3('.tl-06');
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
