/**
 * Created by truginis on 1/21/15.
 */
"use strict"

var app = angular.module("iisNodeTest", ['ngMaterial', 'ngRoute', 'ngAria']);


app.controller("MainController", ['$scope', '$mdDialog', '$mdSidenav', function ($scope, $mdDialog, $mdSidenav) {

    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    var images = [];
    for ( var i = 0; i < 3; i ++ ) {
        images.push('/img/cat.png');
    }
    $scope.imgUrls = images;
}]);
