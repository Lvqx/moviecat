(function(angular) {
	'use strict';

	var module = angular.module(
		'moviecat.movie_detail', [
			'ngRoute',
			'moviecat.services.http'
		]);

	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'MovieDetailController'
		});
	}]);

	module.controller('MovieDetailController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService) {
			$scope.movie = {};
			$scope.loading = true;
			var id = $routeParams.id;
			var apiAddress = 'api.douban.com/v2/movie/subject/' + id;

			HttpService.jsonp(apiAddress,{},function(data) {
				$scope.movie = data;
				$scope.loading = false;
				$scope.apply();
			});
		}
	]);
})(angular)
