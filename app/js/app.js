var PersonController = function ($scope) {
    $scope.name = "Some Person";
};

angular.module('codeBuddy', []).
    controller('PersonController', ['$scope', PersonController]);
