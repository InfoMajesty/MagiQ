angular.module('clientService', [])

	// super simple service
	// each function returns a promise object 
	.factory('ClientFactory', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/clients');
			},
			create : function(clientData) {
				return $http.post('/addclient', clientData);
			}

		}
	}]);