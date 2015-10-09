/**
 * Created by praveen on 14.09.15.
 */

angular.module('PraveenApp').controller('AcadCtrl', function($scope, $timeout, config, $http) {
    $scope.studies = null;
    $scope.ready = 0;

    // Get works info
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/academics.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.studies = response.data;
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
