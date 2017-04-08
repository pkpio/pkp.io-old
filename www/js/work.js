/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('WorkCtrl', function($scope, remote) {
    // Get works info
    remote.fetchSiteData('/data/work.json').then(
        function (data) {
            $scope.works = data;
        }
    );
});
