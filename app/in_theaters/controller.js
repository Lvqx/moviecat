(function(angular) {
	'use strict';

	var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.services.http']);

	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/in_theaters', {
			templateUrl: 'in_theaters/view.html',
			controller: 'InTheaterController'
		});
	}]);

	module.controller('InTheaterController', [
		'$scope',
		'$routeParams',
		'HttpService',
		function($scope, $routeParams, HttpService) {
			$scope.subjects = [];
			$scope.message = '';
			HttpService.jsonp(
				'http://api.douban.com/v2/movie/in_theaters', {},
				function(data) {
					// $apply的作用就是让指定的表达式重新同步
					$scope.subjects = data.subjects;
					$scope.$apply('subjects');
				});
		}
	]);
})(angular)
