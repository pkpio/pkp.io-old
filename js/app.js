/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp', ['ngMaterial', 'ngRoute', 'angular-timeline', 'angularTypewrite', 'btford.markdown']);

// Theme setup
angular.module('PraveenApp').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('deep-orange');
});

// Constants setup
angular.module('PraveenApp').constant('config', {
    baseUrl : 'http://pkp.io',  // Baseurl to load site resources
    loadDelay : 250             // Min. delay before sending data load requests
});

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
        .when('/blog/:posturl*\/',{
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
