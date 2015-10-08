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

// Constants setup
angular.module('PraveenApp').constant('config', {
    baseUrl : 'http://pkp.io',  // Baseurl to load site resources
    loadDelay : 100             // Min. delay before sending data load requests
});

// Route setup
angular.module('PraveenApp').config(function($routeProvider) {
    $routeProvider
        .when('/about',{
            templateUrl : 'view/about.html',
            controller  : 'AboutCtrl'
        })
        .when('/academics',{
            templateUrl : 'view/academics.html',
            controller  : 'AcadCtrl'
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
            controller  : 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('PraveenApp').controller('AppCtrl', function($scope) {
    $scope.menuItems = [
        {
            class: "fa-user",
            text: "About",
            url: "#/about"
        },
        {
            class: "fa-graduation-cap",
            text: "Academics",
            url: "#/academics"
        },
        {
            class: "fa-coffee",
            text: "Work",
            url: "#/work"
        },
        {
            class: "fa-code",
            text: "Projects",
            url: "#/projects"
        }
    ];
});
