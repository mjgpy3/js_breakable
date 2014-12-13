var PersonController = function ($scope) {
    $scope.username = "Some Person";
    $scope.events = [];
};

angular.module('codeBuddy', []).
    controller('PersonController', ['$scope', PersonController]);
