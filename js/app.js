/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp', ['ngMaterial', 'ngRoute', 'angular-timeline', 'angularTypewrite']);

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
            templateUrl : 'view/introduction.html',
            controller  : 'IntroCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('PraveenApp').controller('AppCtrl', function($scope, $mdSidenav) {
    $scope.menuItems = [
        {
            class: "fa-user",
            text: "About",
            url: "/about"
        },
        {
            class: "fa-graduation-cap",
            text: "Academics",
            url: "/academics"
        },
        {
            class: "fa-coffee",
            text: "Work",
            url: "/work"
        },
        {
            class: "fa-code",
            text: "Projects",
            url: "/projects"
        },
        {
            class: "fa-lightbulb-o",
            text: "Random thoughts",
            url: "/random"
        }
    ];

});
