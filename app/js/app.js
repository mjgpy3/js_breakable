var PersonController = function ($scope) {
    $scope.name = "Some Person";
};

angular.module('codebuddy', []).
    controller('PersonController', ['$scope', PersonController]);
