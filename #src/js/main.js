import loaded from './assets/preloader.js';

loaded('.preloader');

// import { dynamicAdaptive } from './assets/dynamic-adaptive.js';

// dynamicAdaptive();

import returnToSavedPosition from './modules/return-position.js';
returnToSavedPosition();
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from './assets/anchors-smooth-scrolling.js';

anchorsSmoothScrolling();

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
import {
	timeLineHeaderItem,
	timeLineTextItem,
} from './animations/anime-js.jsx';

document.addEventListener('DOMContentLoaded', function () {
	const textItem = document.querySelector('.performance__text');
	if (textItem) {
		timeLineTextItem();
	}


	//* ------------------------------- Date -------------------------------------
	let dateContainer = document.querySelector('.performance__date');
	if (!dateContainer) return;

	let now = new Date();
	let options = { month: 'short' }; // Сокращённое название месяца
	let day = now.getDate();
	let month = new Intl.DateTimeFormat('ru-RU', options).format(now);

	// Убираем точку и делаем первую букву заглавной
	month = month.replace('.', '').charAt(0).toUpperCase() + month.slice(1, -1);

	dateContainer.innerHTML = `<div class="day">${day}</div> <div class="data-wrapper">
<div class="month">${month}</div></div>`;


	//* --------------------------- Animation Header -----------------------------
	const header = document.querySelector('.header');
	const mainContent = document.querySelector('.page__main-content');
	if (header && mainContent) {
		// Именованная функция для обработки скроллинга
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
		// Выполнение timeLineHeaderItem при загрузке
		timeLineHeaderItem();

		// Добавление обработчика скроллинга
		window.addEventListener('scroll', handleScroll);

		// Очистка обработчиков при выгрузке страницы
		window.addEventListener('beforeunload', () => {
			window.removeEventListener('scroll', handleScroll);
		});
	}
});



//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------