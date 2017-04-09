/**
 * Created by praveen on 17.12.15.
 */
angular.module('PraveenApp').controller('BlogPostCtrl', function($rootScope, $scope, remote, $routeParams, $sce) {
    // Get post data
    remote.fetchBlogData('/' + $routeParams.posturl + '/').then(
        function (data) {
            $scope.post = data;
            $rootScope.title = $scope.post.title;
        }
    );

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
