
angular.module('AppRoutes', []).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'MoneyController'
            }).
            when('/money', {
                templateUrl: 'views/money.html',
                controller: 'MoneyController'
            }).
            when('/money/:category/:Id ', {
                templateUrl: 'views/money.html',
                controller: 'MoneyController'
            }).
            when('/test', {
            	templateUrl: 'views/test.html',
            	controller: 'MoneyController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
        
