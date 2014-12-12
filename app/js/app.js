var PersonController;

angular.module('codeBuddy', []).
    controller('PersonController', ['$scope', PersonController]);

PersonController = function ($scope) {
    $scope.name = "Some Person";
};

