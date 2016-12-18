(function(angular) {
  'use strict';
    angular.module('moviecat.directive.auto-focus',[]).directive('autoFocus',['$location',function($location) {
      // var path = $location.path();
      return {
        restirct: 'A',
        link:function($scope,iElm,iAttrs,controller) {
          $scope.$location = $location;
          $scope.$watch('$location.path()',function(now) {
            var aLink = iElm.children().attr('href');
            var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
            if (now.startsWith(type)) {
              iElm.parent().children().removeClass('active');
              iElm.addClass('active');
            }
          })
          // iElm.on('click',function() {
          //
          //   iElm.parent().children().removeClass('active');
          //   iElm.addClass('active')
          // })
        }
      }
    }])
})(angular);
