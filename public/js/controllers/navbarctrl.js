
//var AppControllers = angular.module('AppControllers', []);

angular.module('NavbarCtrl', []).controller('NavbarController', ['$scope', '$location', function ($scope, $location) {
        
    $scope.subApps = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Portemonaie",
            path: "/money"
        },
        {
            title: "Test",
            path: "/test"
        }
    ];
        
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
        
    $scope.getClass = function (path) {
        if (path === '/') {
            if ($location.path() === '/') {
                return "active";
            } else {
                return "";
            }
        }

        if ($location.path().substr(0, path.length) === path) {
            return "active";
        } else {
            return "";
        }
    };
}]);
