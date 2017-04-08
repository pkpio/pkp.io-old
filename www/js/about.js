/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('AboutCtrl', function($scope, remote, $sce) {
    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    // Get profile
    remote.fetchSiteData('/data/about.json').then(
        function (data) {
            $scope.profile = data;
        }
    );
});
