import fancyBox from '@/js/utils/fancyapps.js';
import newsAnimation from './animations/news-animation.jsx';
import { buildSwiper } from './layouts/build-swiper.js';
import {
  newsSlide,
  swiperPerform,
  templesSlide,
} from './layouts/main-slide.js';
import AnchorScroller from './modules/AnchorScroller.js';
import initMap from './modules/map.js';

function onDomReady() {
  initMap();
  buildSwiper();
  fancyBox();
  newsAnimation();
  swiperPerform('.slide-perform');
  templesSlide('.temples-slide');
  newsSlide('.news-slide');

  // slideSchedule('.slide-schedule');`
}
document.addEventListener('DOMContentLoaded', onDomReady);

//* ---------------- Плавная прокрутка страницы до позиции ---------------------
//* AnchorScroller — всегда (и на мобилке, и на ПК)
//* Здесь передаём smoother, чтобы он использовал правильный scrollTo с offset'ом
new AnchorScroller({
  headerSelector: '.offset-header',
  selector: '.anchor-link',
  sidebarSelector: '[data-sidebar]',

  onCloseSidebar: (sidebar) => sidebar?.classList.remove('_open-list'),
  onCloseButton: (button) => button?.classList.remove('is-active'),
});
// * Опционально: слушаем событие от навигатора (если нужно куда-то ещё)
window.addEventListener('activeSectionChanged', (e) => {
  console.log('Active section changed:', e.detail);
});
