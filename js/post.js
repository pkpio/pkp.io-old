/**
 * Created by praveen on 17.12.15.
 */
angular.module('PraveenApp').controller('BlogPostCtrl', function($scope, $timeout, config, $http, $routeParams, $sce) {
    $scope.post = null;
    $scope.ready = 0;

    // Get posts list
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: config.blogUrl + '/' + $routeParams.posturl + '/'
        };
        $http(req)
            .then(
                function (response) { // Success callback
                    $scope.post = response.data;
                    $scope.ready = 1;
                },
                function (response) { //Error callback
                    console.log(response.toString());
                }
            );
    };

    // Delayed call to avoid navbar freeze on close
    $timeout($scope.loadData, config.loadDelay);

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.extractDay = function(dateStr){
        if(!dateStr)
            return;
        var items = dateStr.split("-");
        return items[2].substr(0, 2);
    };

    $scope.extractMonth = function(dateStr){
        if(!dateStr)
            return;
        var items = dateStr.split("-");
        switch (parseInt(items[1])){
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sep";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            default:
            case 12:
                return "Dec";
        }
    };

    $scope.extractYear = function(dateStr){
        if(!dateStr)
            return;
        var items = dateStr.split("-");
        return items[0];
    };
});