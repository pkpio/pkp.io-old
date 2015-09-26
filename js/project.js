/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('ProjectCtrl', function($scope, config, $http) {
    $scope.projects = null;
    $scope.ready = 0;

    // Get projects info
    var req = {
        method: 'GET',
        url: config.baseUrl + '/data/project.json'
    };

    $http(req)
        .then(
        function(response){ // Success callback
            $scope.projects = response.data;
            $scope.ready = 1;
        },
        function(response){ //Error callback
            console.log(response.toString());
        }
    );

});