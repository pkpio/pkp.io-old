/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('WorkCtrl', function($scope, $timeout, config, $http) {
    $scope.works = null;
    $scope.ready = 0;

    // Get works info
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/work.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.works = response.data;
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