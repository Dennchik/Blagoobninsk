import loaded from './assets/preloader.js';
loaded('.preloader');

import { date } from './assets/date.js';

// import { dynamicAdaptive } from './assets/dynamic-adaptive.js';
// dynamicAdaptive();

import returnToSavedPosition from './modules/return-position.js';
returnToSavedPosition();
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from './assets/anchors-smooth-scrolling.js';
anchorsSmoothScrolling();

import {
	timeLineHeaderItem,
	timeLineTextItem,
} from './animations/anime-js.jsx';
//* ----------------------------------------------------------------------------
const menuList = document.querySelector('.menu-list');
const burgerButtons = document.querySelectorAll('.burger-button');
const listContent = document.querySelector('.page__menu-list');
const buttons = document.querySelectorAll('.hamburger');

burgerButtons.forEach(burgerButton => {
	burgerButton.addEventListener('click', () => {
		const backgroundColorTransparent = getComputedStyle(
			document.documentElement).getPropertyValue(
				'--background-transparent');


		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.toggle('is-active');
		}
		// burgerButton.firstChild.classList.toggle('is-active');
		menuList.classList.toggle('_open-list');
		document.body.classList.toggle('no-scroll');
		if (menuList.classList.contains('_open-list')) {
			// listContent.style.pointerEvents = 'all';
			listContent.style.backgroundColor = backgroundColorTransparent;
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
			listContent.style.backgroundColor = 'transparent';
			// listContent.style.pointerEvents = 'none';
		}
	});
});
//* ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const textItem = document.querySelector('.hgroup-items');
	if (textItem) {
		timeLineTextItem();
	}

	date('.performance__date');
});

//* ----------------------------- Button Search --------------------------------
const headerContainer = document.querySelector('.header__container');
const sectionTop = document.querySelector('.section-top');
const searchButton = document.querySelector('.menu-items__search-button');
searchButton.addEventListener('click', () => {
	headerContainer.classList.toggle('_active');
	if (sectionTop) {
		if (headerContainer.classList.contains('_active')) {
			sectionTop.style.paddingTop = '50px';
			sectionTop.style.transition = 'padding-top 0.3s ease-in-out';
		} else {
			sectionTop.style.paddingTop = '0';
			sectionTop.style.transition = 'padding-top 0.3s ease-in-out';
		}
	}
});
//* --------------------------- Animation Header -------------------------------
const initHeaderScroll = () => {
	const header = document.querySelector('.header');
	const mainContent = document.querySelector('.page__main-content');

	if (!header || !mainContent) return;

	const handleScroll = () => {
		const mainContentTop = mainContent.getBoundingClientRect().top;

		if (mainContentTop < 0) {
			header.classList.add('with-border');
			header.classList.remove('without-border');
		} else {
			header.classList.add('without-border');
			header.classList.remove('with-border');
		}
	};

	// Сразу применим поведение при загрузке
	handleScroll();
	// Выполнение timeLineHeaderItem при загрузке
	timeLineHeaderItem();

	// Добавление обработчика скроллинга 
	window.addEventListener('scroll', handleScroll);

	// Очистка обработчиков при выгрузке страницы
	window.addEventListener('beforeunload', () => {
		window.removeEventListener('scroll', handleScroll);
	});
};
document.addEventListener('DOMContentLoaded', () => {
	// Гарантированно запускаем и при обычной загрузке, и при возврате из истории
	window.addEventListener('DOMContentLoaded', initHeaderScroll);
	window.addEventListener('pageshow', initHeaderScroll);

});
//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------