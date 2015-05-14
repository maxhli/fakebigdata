var myApp = angular.module("myApp", []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('Hello world from controller');
	$http.get('/data');
}]);
