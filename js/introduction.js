/**
 * Created by praveen on 13.09.15.
 */

angular.module('PraveenApp').controller('IntroCtrl', function($scope) {
    $scope.params = {
        "baseDelay" : 1000,
        "typeDelay" : 100,
        "blinkCursor" : false,
        "blinkDelay" : 100,
        "lineDelay" : 1200
    };
    $scope.messages = [
        "<b>Hello World!</b>",
        "I'm <b>Praveen Kumar Pendyala</b>",
        "<i class='fa fa-male'> Human</i>",
        "<i class='fa fa-code'> Programmer</i>",
        "<i class='fa fa-cutlery'> Foodie</i>",
        "Explore when ready ... "
    ];
    $scope.getInitialDelay = function($index){
        delay = $scope.params.baseDelay;
        for(i=0; i<$index; i++)
            delay += $scope.messages[i].length * $scope.params.typeDelay + $scope.params.lineDelay;
        return delay;
    };
    $scope.getBlinking = function($index){
        return ($index == $scope.messages.length - 1);
    };
});