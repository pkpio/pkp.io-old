/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('AboutCtrl', function($scope) {
    $scope.test = [
        "Hello World!"
    ];
    $scope.getText = function(){
        return $scope.test;
    };
});