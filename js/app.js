/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp', ['ngMaterial', 'ngRoute', 'angular-timeline']);

// Theme setup
angular.module('PraveenApp').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('deep-orange');
});

// Route setup
angular.module('PraveenApp').config(function($routeProvider) {
    $routeProvider
        .when('/about',{
            templateUrl : 'view/about.html',
            controller  : 'WorkCtrl'
        })
        .when('/study',{
            templateUrl : 'view/study.html',
            controller  : 'WorkCtrl'
        })
        .when('/work',{
            templateUrl : 'view/work.html',
            controller  : 'WorkCtrl'
        })
        .when('/project',{
            templateUrl : 'view/project.html',
            controller  : 'ProjectCtrl'
        })
        .when('/',{
            templateUrl : 'view/about.html',
            controller  : 'WorkCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('PraveenApp').controller('AppCtrl', function($scope) {
    $scope.navOpen = false;
    $scope.navToggle = angular.element( document.querySelector('#nav-toggle'));

    $scope.toggle = function() {
        if ($scope.navOpen == true) {
            $scope.navToggle.removeClass('active');
            $scope.navOpen = false;
        } else {
            $scope.navToggle.addClass('active');
            $scope.navOpen = true;
        }
    };

});
