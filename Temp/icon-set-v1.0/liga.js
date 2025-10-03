/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'snow': '&#xe90d;',
            'whatsapp': '&#xf232;',
            'vk-brand': '&#xf189;',
            'telegram-fly': '&#xe91b;',
            'sun': '&#xf185;',
            'unlink': '&#xf127;',
            'angle-left': '&#xf104;',
            'angle-right': '&#xf105;',
            'angle-up': '&#xf106;',
            'angle-down': '&#xf107;',
            'volume-control-phone': '&#xf2a0;',
            'cross-middle': '&#xe944;',
            'phone-ringing': '&#xe904;',
            'git-hub-circle': '&#xe921;',
            'angles-left-solid': '&#xe94c;',
            'angles-right-solid': '&#xe94f;',
            'angles-up-solid': '&#xe94d;',
            'angles-down-solid': '&#xe94e;',
            'contacts': '&#xe901;',
            'plus': '&#xe911;',
            'check': '&#xe90f;',
            'file-download': '&#xe910;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
