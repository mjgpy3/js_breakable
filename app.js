angular = require('angular');

var PersonController = function ($scope) {
    $scope.username = "Some Person";
    $scope.events = [];
};

angular.module('codeBuddy', ['restangular']).
    controller('PersonController', ['$scope', PersonController]);
