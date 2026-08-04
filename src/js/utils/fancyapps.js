import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function fancyBox() {
  Fancybox.bind('[data-fancybox]', {
    // Опции анимации (по умолчанию анимация увеличения из источника уже
    // включена)
    Carousel: {
      infinite: false,
    },
    animated: true,
    showClass: 'f-zoomIn',
    hideClass: 'f-zoomOut',
  });
}
