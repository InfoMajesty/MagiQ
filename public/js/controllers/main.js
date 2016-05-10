angular.module('app', ['clientService'])


	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','ClientFactory', function($scope, $http, ClientFactory) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.MyVar = "MyTestVar";

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		ClientFactory.get()
			.success(function(data) {
				$scope.clientList = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createClient = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.clientname != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				ClientFactory.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						ClientFactory.get()
							.success(function(data) {
								$scope.clientList = data;
								$scope.loading = false;
							});
					});
			}
		};
		
	}]);