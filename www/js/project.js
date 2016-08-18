/**
 * Created by praveen on 12.09.15.
 */
angular.module('PraveenApp').controller('ProjectCtrl', function($scope, $timeout, config, $http) {
    $scope.projects = null;
    $scope.ready = 0;

    // Get projects info
   $scope.loadData = function(){
       var req = {
           method: 'GET',
           url: config.baseUrl + '/data/project.json'
       };
       $http(req)
           .then(
           function (response) { // Success callback
               $scope.projects = response.data;
               $scope.ready = 1;
           },
           function (response) { //Error callback
               console.log(response.toString());
           }
       );
   };

    // Delayed call to avoid navbar freeze on close
    $timeout($scope.loadData, config.loadDelay);

    $scope.test = 0;

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
