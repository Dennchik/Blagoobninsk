import '../scss/main.scss';
import '../scss/index.scss';
import loaded from './assets/preloader.js';
import { date } from './assets/date.js';
import { dynamicAdaptive } from './assets/dynamic-adaptive.js';
import returnToSavedPosition from './modules/return-position.js';

loaded('.preloader');

dynamicAdaptive();

returnToSavedPosition();
//* ------------------------- Header animations --------------------------------
import {
  timeLineHeaderItem,
  timeLineTextItem,
} from './animations/anime-js.jsx';
//* ----------------------------------------------------------------------------
function layoutMenu(params) {
  const menuList = document.querySelector('.menu-list');
  const burgerButtons = document.querySelectorAll('.burger-button');
  const buttons = document.querySelectorAll('.hamburger');

  burgerButtons.forEach((burgerButton) => {
    burgerButton.addEventListener('click', () => {
      const backgroundColorTransparent = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--background-transparent');

      for (let i = 0; i < burgerButtons.length; i++) {
        burgerButtons[i].classList.toggle('is-active');
        window.addEventListener('resize', () => {
          if (window.innerWidth >= 768) {
            burgerButtons[i].classList.remove('is-active');
          }
        });
      }

      menuList.classList.toggle('_open-list');
      document.body.classList.toggle('no-scroll');
    });
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      menuList.classList.remove('_open-list');
      document.body.classList.remove('no-scroll');
    }
  });
}
document.addEventListener('DOMContentLoaded', layoutMenu);

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

// if (!searchButton) return;
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

//* -------------------------- [ Блок Aside menu ] -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.querySelectorAll('._toggle-menu');

  toggleMenu.forEach((item) => {
    const trigger = item.querySelector('._trigger');

    trigger.addEventListener('click', () => {
      // 1. Если хотим, чтобы открывался не блок один за раз - закомментируй код ниже:

      toggleMenu.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-active');
        }
      });

      // 2. Переключаем класс на текущем элементе
      item.classList.toggle('is-active');
    });
  });
});
//* ----------------------------------------------------------------------------
console.log(
  '%c РОССИЯ ',
  'background: blue; color: yellow; font-size: x-large; ' +
    'border-left: 5px solid black; border-top: 30px solid white; ' +
    'border-right: 2px solid black; border-bottom: 30px solid red;'
);
//* ----------------------------------------------------------------------------
