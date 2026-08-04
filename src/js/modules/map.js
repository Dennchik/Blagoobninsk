export default function initMap() {
  const mapBlocks = document.querySelectorAll('[data-map]');

  if (!mapBlocks.length) {
    return;
  }

  function createMaps() {
    mapBlocks.forEach((block) => {
      const points = JSON.parse(block.dataset.map);

      if (!points.length) {
        return;
      }

      const map = new ymaps.Map(block, {
        center: [Number(points[0].lat), Number(points[0].lng)],
        zoom: 12,
        controls: ['zoomControl'],
      });

      points.forEach((point) => {
        const placemark = new ymaps.Placemark(
          [Number(point.lat), Number(point.lng)],
          {
            balloonContentBody: `
              <div class="map-balloon">
                ${
                  point.image
                    ? `<img src="${point.image}" class="map-balloon__image" alt="">`
                    : ''
                }

                ${
                  point.title
                    ? `<div class="map-balloon__title">${point.title}</div>`
                    : ''
                }

                ${
                  point.priest
                    ? `<div class="map-balloon__priest">
                        <strong>Настоятель:</strong> ${point.priest}
                      </div>`
                    : ''
                }
              </div>
            `,
          },
          {
            iconLayout: 'default#image',
            iconImageHref:
              '/wp-content/themes/blagoobninsk/img/icons/map-cross.svg',
            iconImageSize: [19, 22],
            iconImageOffset: [-10, -22],
          }
        );

        map.geoObjects.add(placemark);
      });
    });
  }

  function waitYmaps() {
    if (typeof ymaps !== 'undefined') {
      ymaps.ready(createMaps);
      return;
    }

    setTimeout(waitYmaps, 100);
  }

  waitYmaps();
}
