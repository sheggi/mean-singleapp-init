'use strict';

/**
 * freigewählter Name für die Aplikation ist 'App'
 */
angular.module('App', [
    'ui.bootstrap',
    'ngRoute',
    'AppRoutes',
    'MoneyCtrl',
    'NavbarCtrl',
    'ValutaFilter',
    'MoneyService'
]);
