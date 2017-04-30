angular.module('PraveenApp').controller('ErrorCtrl', function($scope, remote) {

    remote.fetchSiteData('/data/null').then(
        function (data) {
            
        }
    );
});
