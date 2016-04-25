(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name webApp
     * @description
     * # webApp
     *
     * Main module of the application.
     */

    angular
        .module('myApp', [
            'ngSanitize',
            'egeo.config',
            'egeo.buttons',
            'egeo.childrenClass',
            'egeo.toolbar',
            'egeo.row',
            'egeo.forms',
            'egeo.header'
        ])

        .config(function(EgeoConfigProvider) {
            EgeoConfigProvider.setEgeoPath('js/egeo');
        });
})();
