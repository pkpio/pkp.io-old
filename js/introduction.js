/**
 * Created by praveen on 13.09.15.
 */

angular.module('PraveenApp').controller('IntroCtrl', function($scope) {
    $scope.params = {
        "eraseDelay" : 30,
        "typeDelay" : 80,
        "blinkCursor" : true,
        "blinkDelay" : 80,
        "initialDelay" : 1200
    };
    $scope.messages = [
        "Hello World! ",
        "I'm Praveen ",
        "Human ",
        "Programmer ",
        "Foodie ",
        ".... ",
        "....... ",
        "........... ",
        "Expecting something cool? ",
        "Sorry to disappoint ",
        "I'm actually running out of things to say ",
        "Sooner than I thought ",
        "Time to look around ",
        "Hint : Use the menu key ",
        "See if something here interests you ",
        "May be we can collaborate on a project ",
        "Or grab a drink and discuss ",
        "Now I'm all out ",
        "For REALS! ",
        "Seriously! No kidding! ",
        "Looks like you are a tough one ",
        "Well, so am I ...  "
    ];
    $scope.finish = function(){
        // Repeat? ;)
    }
});