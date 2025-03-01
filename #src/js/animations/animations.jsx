import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from 'gsap/SplitText';
// import { Observer } from 'gsap/Observer';

// import { CustomEase } from 'gsap/CustomEase';
// import { CustomBounce } from 'gsap/CustomBounce';
// import { CustomWiggle } from 'gsap/CustomWiggle';
//* _____________ Регистрация - ScrollTrigger, ScrollSmoother __________________
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//* _____________________ Конфигурация - ScrollTrigger _________________________
ScrollTrigger.normalizeScroll(false);
ScrollTrigger.config({ ignoreMobileResize: true });

//* ----------------------------------------------------------------------------
const smoother = ScrollSmoother.create({
	wrapper: '#wrapper',
	content: '#content',
	speed: 1,
	smooth: 1.5,
	effects: true,
	smoothTouch: 0.1,
});

//* ___________________________ "applyParallax" ________________________________
export function applyParallax(element) {
	const smoother = ScrollSmoother.get();
	smoother.effects(element, {
		speed: () => 0.5
	});
}
//* _______________________ Создание ScrollTrigger _____________________________
// export function refreshScrollTrigger() {
// 	return ScrollTrigger.refresh();
// }

// export function LagTextFunction() {
// 	const smoother = ScrollSmoother.get();

// 	if (window.innerWidth > 490) {
// 		smoother.effects('.lag-1', { lag: 2, speed: 1 });
// 		smoother.effects('.lag-2', { lag: 2, speed: 1.2 });
// 		smoother.effects('.col-1', { lag: 1.5, speed: 0.8 });
// 		smoother.effects('.col-2', { lag: 1.5, speed: 1 });
// 	}
// }

// export function applyParallax(element) {
// 	const smoother = ScrollSmoother.get();
// 	smoother.effects(element, {
// 		speed: () => 0.5
// 	});
// }

//*
// ----------------------------------------------------------------------------
export function initSectionTriggerMove(trigger, targets) {
	ScrollTrigger.create({
		trigger: trigger,
		/* Начинаем событие, когда верхняя граница элемента-1 находится на 100px ниже верха окна браузера*/
		start: 'top center',
		endTrigger: trigger,
		// Конец события - конец документа 
		/*Конец событие когда верхняя граница лемента 1 достигнет верха окна браузера*/
		end: 'bottom center',
		toggleClass: { targets: targets, className: '_active' },
		// markers: true
	});
}
// * ___________________________ Rotate Icon ___________________________________
export function tlRotateIcon() {
	gsap.to('._rotate-el-01', {
		rotate: -720, // постоянное вращение
		ease: 'none', // Равномерное изменение без ускорений
		scrollTrigger: {
			trigger: '._rotate-el-01',
			start: 'top bottom', // Начало анимации, когда `.trigger` выше нижней
			// границы экрана
			end: 'top top', // Конец анимации, когда `.trigger` выше нижней границы
			// экрана
			scrub: true, // Гладкая привязка к скроллу с небольшой задержкой
			// markers: true, // Для отладки (убрать в продакшене)
		}
	});
	// gsap.to('._rotate-el-02', {
	// 	rotate: -720, // постоянное вращение
	// 	ease: 'none', // Равномерное изменение без ускорений
	// 	scrollTrigger: {
	// 		trigger: '._rotate-el-02',
	// 		start: 'top bottom', // Начало анимации, когда `.trigger` выше нижней
	// 												 // границы экрана
	// 		end: 'top top', // Конец анимации, когда `.trigger` выше нижней границы
	// 										// экрана
	// 		scrub: true, // Гладкая привязка к скроллу с небольшой задержкой
	// 		// markers: true, // Для отладки (убрать в продакшене)
	// 	}
	// });
}

//* __________________ Плавное исчезновение "performance" ______________________
export function tlVerticalOpacity() {
	gsap.to('.el-opacity, .bg-section__image', {
		opacity: 0, // Исчезает полностью
		ease: 'none', // Равномерное изменение без ускорений
		scrollTrigger: {
			trigger: '.performance',
			start: 'top top', // Начало анимации, когда `.performance` на 80% вниз от
			// верхней границы экрана
			end: 'bottom top', // Конец анимации, когда `.performance` полностью ушел
			// вверх
			scrub: 1, // Гладкая привязка к скроллу с небольшой задержкой
			// markers: true, // Для отладки (убрать в продакшене)
		}
	});
}

//* _______________________ Плавное появление "Waves" __________________________
export function tlVerticalReverse() {
	gsap.to('.vertical-reverse', {
		opacity: 0.5, // Появление элемента
		ease: 'none', // Равномерное изменение без ускорений
		scrollTrigger: {
			trigger: '.performance',
			/* Начало анимации, когда `.performance` на 80% вниз от верхней
			границы экрана */
			start: 'top top',
			/* Конец анимации, когда `.performance` полностью ушел
			вверх */
			end: 'bottom top',
			scrub: 2, // Гладкая привязка к скроллу с небольшой задержкой
			// markers: true, // Для отладки (убрать в продакшене)
		}
	});
}

//* ____________ Плавное появление заголовков (Анимация Titles) ________________

//* _________________________ Анимация: Parallax _______________________________
export function cassieEvans() {
	smoother.effects('.parallax__image-cont', {
		speed: () => gsap.utils.random(0.55, 0.85, 0.05)
	});

	gsap.to('.parallax__anime-swipe', {
		yPercent: 300,
		delay: 0.2,
		duration: 3,
		stagger: {
			from: 'random',
			each: 0.1
		},
		ease: 'sine.out'
	});

	gsap.to('.parallax__image-cont img', {
		scale: 1.5,
		xPercent: 20,
		scrollTrigger: {
			trigger: '.parallax',
			start: 'top top',
			end: '+=3000px',
			scrub: true
		}
	});
}

//* ___________________ Анимация: lag & skew - колонок _________________________
// export function skewSetter() {
// 	// Создаем быстрый сеттер для свойства skewY.
// 	const setSkew = gsap.quickTo('.grid-box__item, .col-1, .col-2', 'skewY');
// 	// Ограничиваем значение наклона от -20 до 20 градусов.
// 	const clampSkew = gsap.utils.clamp(-5, 5);
// 	// Получаем экземпляр ScrollSmoother.
// 	const smootherInstance = ScrollSmoother.get();

// 	// Используем gsap.ticker для обновления на каждом кадре.
// 	gsap.ticker.add(() => {
// 		// Получаем текущую скорость прокрутки и вычисляем наклон.
// 		const velocity = smootherInstance.getVelocity();
// 		setSkew(clampSkew(velocity / -50));
// 	});

// 	if (window.innerWidth > 490) {
// 		smootherInstance.effects('.lag-1', { lag: 2, speed: 1 });
// 		smootherInstance.effects('.lag-2', { lag: 1.5, speed: 1.2 });
// 		smootherInstance.effects('.col-1', { lag: 1.5, speed: 0.8 });
// 		smootherInstance.effects('.col-2', { lag: 1.5, speed: 1 });
// 	}
// }

//* ___________________ Анимация: Появление картинок ___________________________


//* ____________________ Анимация: Появление текста ____________________________
export function animateH2(element) {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: element,
			start: 'top center+=15%',
			endTrigger: element,
			end: 'top center+=15%',
			toggleActions: 'play none none reverse',
			// markers: true,

			// Добавляем и удаляем класс вручную
			onEnter: () => document.querySelector(element)?.classList.add('_active'),
			onLeaveBack: () => document.querySelector(element)?.classList.remove('_active'),
		},
	});

	// Анимация для смещения по Y
	timeline.from(element, {
		y: 25,
		duration: 0.8, // Продолжительность смещения
		ease: 'sine.in', // Мягкая анимация
	});
}

export function animateH3(element) {
	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: element,
			start: 'top center+=15%',
			endTrigger: element,
			end: 'top center+=15%',
			toggleActions: 'play none none reverse',
			// markers: true,

			// Добавляем и удаляем класс вручную
			onEnter: () => document.querySelector(element)?.classList.add('_active'),
			onLeaveBack: () => document.querySelector(element)?.classList.remove('_active'),
		},
	});

	// Анимация для смещения по Y
	timeline.from(element, {
		ease: 'sine.in', // Мягкая анимация
	});
}
//* __________________ Анимация: Иконок при наведении __________________________

