/**
 * Created by praveen on 14.09.15.
 */

angular.module('PraveenApp').controller('AcadCtrl', function($scope, remote) {
    // Get academic data
    remote.fetchSiteData('/data/academics.json').then(
        function (data) {
            $scope.papers = data.papers;
            $scope.studies = data.studies;
        }
    );
});
