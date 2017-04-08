/**
 * Created by praveen on 17.12.15.
 */
angular.module('PraveenApp').controller('BlogCtrl', function($rootScope, $scope, remote, $routeParams, $sce) {
    // Which posts to list
    var listUrl = '/posts.json';
    if($routeParams.category) {
        listUrl = '/category/' + $routeParams.category + '/';
        $rootScope.title += ' - ' + $routeParams.category;
    }

    // Get posts list
    remote.fetchBlogData(listUrl).then(
        function (data) {
            $scope.posts = data;
        }
    );

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.extractDay = function(dateStr){
        var items = dateStr.split("-");
        return items[2].substr(0, 2);
    };

    $scope.extractMonth = function(dateStr){
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
        var items = dateStr.split("-");
        return items[0];
    };
});
