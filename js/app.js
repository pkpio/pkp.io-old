/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp', ['ngMaterial', 'ngRoute', 'angular-timeline']);

// Theme setup
angular.module('PraveenApp').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('deep-orange');
});

// Route setup
angular.module('PraveenApp').config(function($routeProvider) {
    $routeProvider
        .when('/about',{
            templateUrl : 'view/about.html',
            controller  : 'WorkCtrl'
        })
        .when('/education',{
            templateUrl : 'view/study.html',
            controller  : 'WorkCtrl'
        })
        .when('/work',{
            templateUrl : 'view/work.html',
            controller  : 'WorkCtrl'
        })
        .when('/projects',{
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

});

angular.module('PraveenApp').controller('ToolbarCtrl', function($scope) {

});