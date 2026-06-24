import { buildSwiper } from './layouts/build-swiper.js';
import AnchorScroller from './modules/AnchorScroller.js';
buildSwiper();
import {
  swiperPerform,
  templesSlide,
  newslide,
  websiteSlelide,
  slideSchedule,
} from './layouts/main-slide.js';

swiperPerform('.slide-perform');
templesSlide('.temples-slide');
newslide('.news-slide');
websiteSlelide('.slide-website');
slideSchedule('.slide-schedule');
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
//* AnchorScroller — всегда (и на мобилке, и на ПК)
//* Здесь передаём smoother, чтобы он использовал правильный scrollTo с offset'ом
new AnchorScroller({
  headerSelector: '.offset-header',
  selector: '.anchor-link',
  sidebarSelector: '[data-sidebar]',
  // onCloseButtonSelector: '.burger-button',

  onCloseSidebar: (sidebar) => sidebar?.classList.remove('_open-list'),
  onCloseButton: (button) => button?.classList.remove('is-active'),
});
// * Опционально: слушаем событие от навигатора (если нужно куда-то ещё)
window.addEventListener('activeSectionChanged', (e) => {
  console.log('Active section changed:', e.detail);
});
