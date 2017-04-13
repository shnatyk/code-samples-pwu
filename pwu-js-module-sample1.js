/* global define */
define([
    'jquery',
    /* ... (part of code not allowed to be published) ... */
], function(
    $,
    /* ... (part of code not allowed to be published) ... */
) {
    "use strict";

    var gaParams; // JSON object read form specific file

    /* ... (part of code not allowed to be published) ... */

    return {
        init: function (initGaParams, onClickElements) {
            if (typeof ga === 'function') {
                gaParams = initGaParams;
                this.setOnClick(onClickElements);
            }
        },
        setOnClick: function (onClickElements) {
            var getGaEvent = this.getGaEvent,
                setAction = this.setAction;

            onClickElements.map(function (key, elem) {
                $(elem).on('click', function () {
                    var eventKey = $(this).data('ga-event'),
                        eventKeyArray = eventKey.split('.'),
                        gaEvent = getGaEvent(eventKey),
                        actionKey = setAction(eventKeyArray[2]),
                        newEventKey = eventKeyArray.slice(0,-1).join(".") + "." + actionKey;

                    $(this).data('ga-event', newEventKey);
                    ga('send', gaEvent);
                });
            });
        },
        setAction: function (action) {
            /* ... (part of code not allowed to be published) ... */
        },
        getGaEvent: function(gaEventKey) {
            return gaEventKey
                    .split('.')
                    .reduce(
                        function (paramKey, key) {
                            return paramKey[key];
                        }, 
                        gaParams
                    );
        },
        /* ... (part of code not allowed to be published) ... */
    };
});