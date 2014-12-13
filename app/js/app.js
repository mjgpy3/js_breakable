var PersonController = function ($scope) {
    $scope.username = "Some Person";
};

angular.module('codeBuddy', []).
    controller('PersonController', ['$scope', PersonController]);
