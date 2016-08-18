/**
 * Created by praveen on 14.09.15.
 */

angular.module('PraveenApp').controller('AcadCtrl', function($scope, $timeout, config, $http) {
    $scope.papers = null;
    $scope.studies = null;
    $scope.ready = 0;

    // Get works info
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: config.baseUrl + '/data/academics.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.papers = response.data.papers;
                $scope.studies = response.data.studies;
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
