angular.module('codeBuddy', []).
    controller('PersonController', ['$scope', PersonController]);

var PersonController = function ($scope) {
    $scope.name = "Some Person";
};
