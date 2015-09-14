/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('ProjectCtrl', function($scope) {
    $scope.projects = [

        // Coursestats
        {
            showLevel: 5,
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
                "AngularJS", "PHP5", "MySql", "Python", "Google App Engine", "Material design"
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

        // MDroid
        {
            showLevel: 5,
            badgeClass: 'info',
            year: "Now",
            title: 'MDroid',
            icon:{
                url: "img/projects/mdroid.png",
                useUrl: true
            },
            details: 'Moodle for Android',
            skills: [
                "Android", "Githooks", "Markdown", "REST", "Moodle Webservices"
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

    /**
     *  **************  2015  ********************
     */

        // iRing
        {
            showLevel: 3,
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
        },

        // Token bucket
        {
            showLevel: 2,
            badgeClass: 'default',
            year: "2015",
            title: 'Token bucket',
            icon:{
                url: "img/projects/tokenbucket.png",
                useUrl: true
            },
            details: 'A visualization of the Token Bucket',
            skills: [
                "JavaScript", "Bootstrap"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/token-bucket"
                },
                {
                    iconClass: "fa-globe",
                    url: "http://praveen.xyz/demos/token-bucket/"
                }
            ]
        },

        // CollabTodo
        {
            showLevel: 2,
            badgeClass: 'default',
            year: "2015",
            title: 'CollabTodo',
            icon:{
                url: "img/projects/tokenbucket.png",
                useUrl: false
            },
            details: 'A fully decentralized, background syncing, collaborative Todo application',
            skills: [
                "Android", "PubSub"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/CollabTodo"
                }
            ]
        },

        // ADK-Driver
        {
            showLevel: 4,
            badgeClass: 'default',
            year: "2015",
            title: 'Android accessory driver',
            icon:{
                url: "img/projects/linux.png",
                useUrl: true
            },
            details: 'Kernel driver to set any Android device into ADK (Accessory Development Kit) mode',
            skills: [
                "Linux", "Kernel driver", "Android accessory"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/adk-driver"
                }
            ]
        },


    /**
     *  **************  2014  ********************
     */
        // SecurePUF.
        {
            showLevel: 4,
            badgeClass: 'warning',
            year: "2014",
            title: 'SecurePUF',
            icon:{
                url: "img/projects/puf.png",
                useUrl: true
            },
            details: 'An implementation of Lightweight Secure Physically Unclonable Function',
            skills: [
                "Verilog", "FPGA", "Xilinx ISE", "Virtex 6", "Hardware"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/securePUF"
                },
                {
                    iconClass: "fa-github-alt",
                    url: "https://github.com/praveendath92/securePUF_sw"
                }
            ]
        },

        // PDL.
        {
            showLevel: 4,
            badgeClass: 'warning',
            year: "2014",
            title: 'Programmable Delay Logic',
            icon:{
                url: "img/projects/puf.png",
                useUrl: true
            },
            details: 'An implementation of using PDLs - Programmable Delay Logics on a virtex 5 FPGA. ' +
            ' Delays are configurable to the order of 10 pico seconds',
            skills: [
                "Verilog", "FPGA", "Xilinx ISE", "Virtex 5", "Hardware"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/PDL"
                }
            ]
        },

        // BARD
        {
            showLevel: 5,
            badgeClass: 'warning',
            year: "2014",
            title: 'Google Summer of Code',
            icon:{
                url: "img/projects/gsoc.png",
                useUrl: true
            },
            details: 'Android remote display for BeagleBoard and other Linux devices',
            skills: [
                "Linux", "Kernel driver", "Android", "Android accessory"
            ],
            links: [
                {
                    iconClass: "fa-linux",
                    url: "https://github.com/praveendath92/bard-linux"
                },
                {
                    iconClass: "fa-android",
                    url: "https://github.com/praveendath92/bard-droid"
                },
                {
                    iconClass: "fa-book",
                    url: "https://github.com/praveendath92/bard-linux/blob/master/documentation/dev.md"
                },
                {
                    iconClass: "fa-youtube",
                    url: "https://www.youtube.com/watch?v=QymwVr9gY-Y"
                },
                {
                    iconClass: "fa-wordpress",
                    url: "http://praveenkumar.co.in/blog/?p=5"
                }
            ]
        },

        // PopTilesPlus
        {
            showLevel: 4,
            badgeClass: 'warning',
            year: "2014",
            title: 'Pop Tiles Plus',
            icon:{
                url: "img/projects/poptilesplus.png",
                useUrl: true
            },
            details: 'An extended version of the game PopTiles',
            skills: [
                "Android", "Playservices"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/PopTilesPlus"
                },
                {
                    iconClass: "fa-download",
                    url: "https://play.google.com/store/apps/details?id=in.co.praveenkumar.poptilesplus"
                }
            ]
        },

        // TumTumTracker
        {
            showLevel: 5,
            badgeClass: 'warning',
            year: "2014",
            title: 'Tum Tum Tracker',
            icon:{
                url: "img/projects/ttt.png",
                useUrl: true
            },
            details: 'Android application to track the TumTums - internal transportation vehicles at IIT Bombay',
            skills: [
                "Android", "Google Maps"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/TumTumTracker"
                },
                {
                    iconClass: "fa-download",
                    url: "https://play.google.com/store/apps/details?id=in.co.praveenkumar.tumtumtracker"
                }
            ]
        },

        // Cap.
        {
            showLevel: 3,
            badgeClass: 'warning',
            year: "2014",
            title: 'Cap.',
            icon:{
                url: "img/projects/cap.png",
                useUrl: true
            },
            details: 'A screen recorder for Android 4.4+ without root',
            skills: [
                "Android"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/Cap."
                }
            ]
        },


    /**
     *  **************  2013  ********************
     */
        // Dual core PUF.
        {
            showLevel: 4,
            badgeClass: 'default',
            year: "2013",
            title: 'Dual-core ALU based PUF',
            icon:{
                url: "img/projects/puf.png",
                useUrl: true
            },
            details: 'Implementation of a dual core adder based PUF on FPGA. ' +
            'Nominated as Best paper candidate at Design Automation Conference 2014',
            skills: [
                "Verilog", "FPGA", "Xilinx ISE", "Virtex 5", "Hardware"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/dual_core_PUF_with_PDL_and_ethernet"
                },
                {
                    iconClass: "fa-github-alt",
                    url: "https://github.com/praveendath92/dual_core_PUF_with_PDL_and_ethernet_SW"
                },
                {
                    iconClass: "fa-file-pdf-o",
                    url: "http://dl.acm.org/citation.cfm?id=2593192"
                }
            ]
        },

        // DRAM interfacing Thesis
        {
            showLevel: 4,
            badgeClass: 'default',
            year: "2013",
            title: 'DRAM of a Xilinx virtex 5',
            icon:{
                url: "img/projects/puf.png",
                useUrl: true
            },
            details: 'Interfacing the DRAM of a Xilinx virtex 5 XUPV5 FPGA board ',
            skills: [
                "Verilog", "FPGA", "Xilinx ISE", "Virtex 5", "Hardware", "MIG"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/DDR2_Interface_Xilinx_XUPV5"
                }
            ]
        },

        // Greedy4Tasks.
        {
            showLevel: 3,
            badgeClass: 'default',
            year: "2013",
            title: 'Greedy4Tasks',
            icon:{
                url: "img/projects/greedy4task.png",
                useUrl: true
            },
            details: 'Greedy algorithm for activity and task scheduling',
            skills: [
                "C++", "Python", "Scilab"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/Greed4Tasks"
                }
            ]
        },

        // GroupChat.
        {
            showLevel: 2,
            badgeClass: 'default',
            year: "2013",
            title: 'GroupChat',
            icon:{
                url: "img/projects/groupchat.png",
                useUrl: true
            },
            details: 'A very basic group chat application for Android beginners',
            skills: [
                "Android"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/GroupChat"
                },
                {
                    iconClass: "fa-download",
                    url: "https://play.google.com/store/apps/details?id=in.co.praveenkumar.groupchat"
                }
            ]
        },

        // SIRC PUF.
        {
            showLevel: 4,
            badgeClass: 'default',
            year: "2013",
            title: 'SIRC PUF',
            icon:{
                url: "img/projects/puf.png",
                useUrl: true
            },
            details: 'Implementation of a dual core adder based PUF on FPGA',
            skills: [
                "Verilog", "FPGA", "Xilinx ISE", "Virtex 5", "Hardware"
            ],
            links: [
                {
                    iconClass: "fa-github",
                    url: "https://github.com/praveendath92/SIRC_HW_Xilinx_XUPV5_Hardware_PUF"
                },
                {
                    iconClass: "fa-github-alt",
                    url: "https://github.com/praveendath92/SIRC_HW_Xilinx_XUPV5_Software_PUF"
                }
            ]
        }


    ];
});