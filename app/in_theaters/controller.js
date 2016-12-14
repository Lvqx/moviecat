(function(angular) {
	'use strict';

	var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.services.http']);

	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/in_theaters/:page', {
			templateUrl: 'in_theaters/view.html',
			controller: 'InTheaterController'
		});
	}]);

	module.controller('InTheaterController', [
		'$scope',
		'$routeParams',
		'HttpService',
		function($scope, $routeParams, HttpService) {
			//分页
			var count = 5;
			var page = parseInt($routeParams.page);
			var start = (page - 1) * count;
			$scope.totalpages = 0;
			$scope.loading = true;
			$scope.subjects = [];
			$scope.message = '';
			$scope.totalCount = 0;
			HttpService.jsonp(
				'http://api.douban.com/v2/movie/in_theaters', {start:start,count:count},
				function(data) {
					// $apply的作用就是让指定的表达式重新同步
					$scope.subjects = data.subjects;
					$scope.totalCount = data.total;
					$scope.totalpages = Math.ceil( $scope.totalCount / count );
					$scope.loading = false;
					$scope.$apply();
				});
		}
	]);
})(angular)
