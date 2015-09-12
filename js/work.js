/**
 * Created by praveen on 12.09.15.
 */

angular.module('PraveenApp').controller('WorkCtrl', function($scope) {
    $scope.events = [{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    },{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    },{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    },{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    }];
});