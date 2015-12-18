/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp', ['ngMaterial', 'ngRoute', 'angular-timeline', 'angularTypewrite']);

// Constants setup
angular.module('PraveenApp').constant('config', {
    baseUrl : 'http://pkp.io',  // Baseurl to load site resources
    loadDelay : 250             // Min. delay before sending data load requests
});

// Theme setup
angular.module('PraveenApp').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('deep-orange');
});

// Disable caching for all HTTP requests
angular.module('PraveenApp').config(['$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

// Route setup
angular.module('PraveenApp').config(function($routeProvider) {
    $routeProvider
        .when('/about',{
            templateUrl : 'view/about.html',
            controller  : 'AboutCtrl'
        })
        .when('/studies',{
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
        .when('/blog',{
            templateUrl : 'view/blog.html',
            controller  : 'BlogCtrl'
        })
        .when('/blog/category/:category',{
            templateUrl : 'view/blog.html',
            controller  : 'BlogCtrl'
        })
        .when('/blog/post/:posturl*\/',{
            templateUrl : 'view/post.html',
            controller  : 'BlogPostCtrl'
        })
        .otherwise({
            templateUrl : 'view/intro.html',
            controller  : 'IntroCtrl'
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
            text: "Studies",
            url: "#/studies"
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
        },
        {
            class: "fa-pencil",
            text: "Blog",
            url: "#/blog"
        }
    ];
});
