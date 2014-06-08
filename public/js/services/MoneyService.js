angular.module('MoneyService', []).factory('Money', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function(callback) {
            $http.get('api/money').success(function(data) {
                console.log(data);
                callback(data);
            });
		},

		// call to POST and create a new nerd
		create : function(moneyData) {
			return $http.post('/api/money', moneyData).success(function(data){
                return data;
            });
		},

		// call to DELETE a nerd
		delete : function(id) {
			return $http.delete('/api/money/' + id);
		}
	}		

}]);
