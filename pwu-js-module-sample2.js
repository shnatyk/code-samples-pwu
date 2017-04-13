/* global define */
define([
    'jquery',
    'modules/carousel/carousel',
    /* ... (part of code not allowed to be published) ... */
], function (
    $, 
    Carousel,
    /* ... (part of code not allowed to be published) ... */
) {
    "use strict";

        // default vars
    var defSelector = '.tile-slider',
        defPrevArrowSelector = '.tile-slider__button_prev',
        defNextArrowSelector = '.tile-slider__button_next',

        defOptions = {
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            nextArrow: defPrevArrowSelector,
            prevArrow: defNextArrowSelector,
            slidesToShow: 1,
            slidesToScroll: 1
        },

        // main vars
        selector = '',
        options = {},
        $carousel;

    /* ... (part of code not allowed to be published) ... */ 

    return {
        init: function (initSelector, initOptions) {
            selector = initSelector || defSelector;         // change default selector if new provided
            $.extend(options, defOptions, initOptions);     // change default options if new provided (by merging arrays)
            $carousel = $(selector);

            Carousel.init($carousel, options);              // set up done, we can run external plugin for img slides
        },
        /* ... (part of code not allowed to be published) ... */
    };
});