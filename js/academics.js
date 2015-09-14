/**
 * Created by praveen on 14.09.15.
 */

angular.module('PraveenApp').controller('AcadCtrl', function($scope) {
    $scope.studies = [
        {
            badgeClass: 'info',
            year: "Now",
            degree: 'Masters in Distributed Software Systems',
            place: 'Technische Universität Darmstadt',
            grade: '??'
        },
        {
            badgeClass: 'default',
            year: "2014",
            degree: 'Bachelors in Electrical Engineering',
            place: 'Indian Institute of Technology Bombay',
            grade: '??/10'
        },
        {
            badgeClass: 'default',
            year: "2010",
            degree: 'Higher Secondary examination',
            place: 'Vijaya Ratna Junior college, Hyderabad',
            grade: '94.8%'
        },
        {
            badgeClass: 'default',
            year: "2008",
            degree: 'Secondary School examination',
            place: 'Gowtham Model School, Rajahmundry',
            grade: '90.3%'
        }
    ];

});
