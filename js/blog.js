/**
 * Created by praveen on 17.12.15.
 */
angular.module('PraveenApp').controller('BlogCtrl', function($scope, $timeout, config, $http) {
    $scope.posts = null;
    $scope.ready = 0;

    // Get posts list
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'blog/_site/posts.json'
        };
        $http(req)
            .then(
                function (response) { // Success callback
                    $scope.posts = response.data;
                    $scope.ready = 1;
                },
                function (response) { //Error callback
                    console.log(response.toString());
                }
            );
    };

    // Delayed call to avoid navbar freeze on close
    $timeout($scope.loadData, config.loadDelay);
});