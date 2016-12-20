(function(angular) {
	'use strict';

	var module = angular.module('moviecat.movie_list', ['ngRoute', 'moviecat.services.http']);

	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListController'
		});
	}]);

	module.controller('MovieListController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService) {
			//分页
			var count = 3;
			var page = parseInt($routeParams.page);
			var start = (page - 1) * count;
			$scope.totalpages = 0;
			$scope.loading = true;
			$scope.subjects = [];
			$scope.message = '';
			$scope.totalCount = 0;
			$scope.currentPage = page;
			HttpService.jsonp(
				'http://api.douban.com/v2/movie/' + $routeParams.category, {
					start: start,
					count: count,
					q:$routeParams.q
				},
				function(data) {
					// $apply的作用就是让指定的表达式重新同步
					$scope.title = data.title;
					$scope.subjects = data.subjects;
					$scope.totalCount = data.total;
					$scope.totalpages = Math.ceil($scope.totalCount / count);
					$scope.loading = false;
					$scope.$apply();
				});

			//上一页下一页
			$scope.go = function(page) {
				if (page >= 1 && page <= $scope.totalpages) {
					$route.updateParams({
						page: page
					});
				}
			};
		}
	]);
})(angular)
