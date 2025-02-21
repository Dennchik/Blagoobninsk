import {
	cassieEvans, tlRotateIcon, tlVerticalOpacity
} from './animations/animations.jsx';
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	cassieEvans();
	if (!isMobile) {
		tlVerticalOpacity();
	}
	setTimeout(() => {
		tlRotateIcon();
	}, 2000);
});
