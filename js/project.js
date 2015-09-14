/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('ProjectCtrl', function($scope) {
    $scope.projects = [
        {
            badgeClass: 'info',
            year: "Now",
            title: 'Coursestats',
            icon:{
                url: "img/projects/coursestats.png",
                useUrl: true
            },
            timeframe: "August 2015 - now",
            details: 'Grading statistics of courses at TU Darmstadt',
            skills: [
                "AngularJS", "PHP5", "MySql", "Python"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/coursestats"
                },
                {
                    iconClass: "fa-globe",
                    url: "http://coursestats.de"
                },
                {
                    iconClass: "fa-book",
                    url: "http://docs.coursestats.de"
                }
            ]
        },
        {
            badgeClass: 'info',
            year: "Now",
            title: 'MDroid',
            icon:{
                url: "img/projects/mdroid.png",
                useUrl: true
            },
            details: 'Moodle for Android',
            skills: [
                "Android", "Markdown", "REST"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/MDroid"
                },
                {
                    iconClass: "fa-download",
                    url: "https://play.google.com/store/apps/details?id=in.co.praveenkumar"
                },
                {
                    iconClass: "fa-book",
                    url: "http://praveenkumar.co.in/mdroid/#!index.md"
                }
            ]
        },
        {
            badgeClass: 'default',
            year: "2015",
            title: 'iRing',
            icon:{
                url: "",
                useUrl: false
            },
            details: 'Intelligent-Ring to auto-lock smartphone on intruder interaction. Supports remote interaction',
            skills: [
                "Android", "Gadgeteer", "Hardware Sensors"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/iRing"
                },
                {
                    iconClass: "fa-youtube",
                    url: "https://www.youtube.com/watch?v=88tF4xQ17BY&feature=youtu.be&start=22&end=60"
                }
            ]
        }

    ];
});