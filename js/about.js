/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('AboutCtrl', function($scope, $timeout, config, $http) {
    $scope.params = {
        typeDelay : 50,
        sentenceDelay : 500,
        currentIndex : 0,
        allDone : false,
        doFinish : function(index){
            $scope.params.currentIndex = index + 1;
            $scope.params.allDone = (index == $scope.messages.length-1);
        },
        getStart : function(index){
            return (index == $scope.params.currentIndex);
        }
    };
    $scope.messages = null;
    $scope.ready = 0;

    // Get projects info
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/intro.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.messages = response.data;
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