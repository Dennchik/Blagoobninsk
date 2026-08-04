//* news-animation.jsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function newsAnimation() {
  const items = document.querySelectorAll('.gallery-news__line');

  if (!items.length) {
    return;
  }

  items.forEach((item) => {
    gsap.from(item, {
      y: 35,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        once: true,
        // markers: true,
      },
    });
  });
}
