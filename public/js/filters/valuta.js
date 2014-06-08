'use strict';
angular.module('ValutaFilter', []).filter('valuta', function () {
    return function (input) {
        if(isNaN(input) || input === null || input === "") return;
        return input.toFixed(2) + ' CHFr.';
    };
});