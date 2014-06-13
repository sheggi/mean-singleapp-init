'use strict';

/**
 * Kontroller für Money Liste
 */
angular.module('MoneyCtrl', []).controller('MoneyController', ['$scope', '$http', '$routeParams', '$filter', 'Money', function ($scope, $http, $routeParams, $filter, Money) {
    
	$scope.panes = [
		{
            title: "Übersicht",
            src: "views/money.list.html",
            active: true
        },
		{
            title: "Change",
            src: "views/money.change.html"
        }
	];
    
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
        
    $http.get('data/data.json').success(function (data) {
		$scope.moneys = data;
		$scope.moneys.date = Date.parse($scope.moneys.date);
        $scope.hMoneys = {name: "Full List", entrys: data, getSum: entryGroupSumm};
	});
    Money.get(function(data) {
        $scope.mongo = data;
    });
    /*$http.get('api/money').success(function (data) {
		$scope.mongo = data;
	});*/
	$scope.orderProp = '-date';
    $scope.query = '';

	$scope.moneyId = $routeParams.moneyId;
    $scope.hello = function (name) {
        alert('FIXXXXXXX');
    };
      
    $scope.formModus = "Einnahme";
        	
	$scope.loadPane = function (src) {
        var i;
        for (i = 0; i < $scope.panes.length; ++i) {
            $scope.panes[i].active = ($scope.panes[i].src === src);
        }
		$scope.paneURL = src;
	};
    
    // ---------- TEST SECTION ----------

    $scope.paneURL = $scope.panes[0].src;
        
    var entryGroupSumm = function () {
        var ens = this.entrys, i, sum = 0;
        if (ens == null) { return 0; }
        for (i = 0; i < ens.length; i++) {
            if (!isNaN(ens[i].value)) {
                sum += ens[i].value;
            }
            
        }
        return sum;
    };
    
    
    $scope.byMonth = function (flatArray) {
		//FIXXXXXXXX only do if Array changed... else return old construct
		var nestedArray = [], indexedMonth = [], yearmonth = "", i;
		if (flatArray == null) { return nestedArray; }
		for (i = 0; i < flatArray.length; i++) {
            yearmonth = $filter('date')(flatArray[i].date, 'yyyyMM') + "";
			if (indexedMonth.indexOf(yearmonth) === -1) {
				indexedMonth[indexedMonth.length] = yearmonth;
				nestedArray[nestedArray.length] = { name: $filter('date')(flatArray[i].date, 'MMMM'), entrys: [], getSum: entryGroupSumm };
			}
			nestedArray[indexedMonth.indexOf(yearmonth)].entrys.push(flatArray[i]);
		}
		
		return nestedArray;
	};
    
    $scope.sendMoneys = function() {
        var i;
        for( i = 0; i < $scope.moneys.length ; i++){
            $scope.moneys[i].description = "Änderung";
            Money.create($scope.moneys[i], function(data) {
                console.log(data);
                $scope.alerts.push({msg: data}); //FIXXX corekte Meldung und Frarbe danger, success
            });
        }
        
        $http.get('api/money').success(function (data) {
            $scope.mongo = data;
        });
    };
    
}]);