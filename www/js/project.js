/**
 * Created by praveen on 12.09.15.
 */
angular.module('PraveenApp').controller('ProjectCtrl', function($scope, remote) {
    // Get projects data
    remote.fetchSiteData('/data/project.json').then(
        function (data) {
            $scope.projects = data;
        }
    );

    // Project filters
    $scope.filters = {
        year : {
            options : ["2012", "2013", "2014", "2015", "Now", "All"],
            value : "All"
        },
        showlevel : {
            options : [1, 2, 3, 4, 5, "All"],
            value : "All"
        },
        filter : function(project){
            var yearMatch = false;
            var levelMatch = false;

            if($scope.filters.year.value == "All" || project.year == $scope.filters.year.value)
                yearMatch = true;
            if($scope.filters.showlevel.value == "All" || project.showLevel == $scope.filters.showlevel.value)
                levelMatch = true;

            return yearMatch && levelMatch;
        }
    }
});
