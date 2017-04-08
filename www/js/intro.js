/**
 * Created by praveen on 13.09.15.
 */

angular.module('PraveenApp').controller('IntroCtrl', function($scope, remote) {
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

    // Get messages
    remote.fetchSiteData('/data/intro.json').then(
        function (data) { // Success callback
            $scope.messages = data;
        }
    );
});
