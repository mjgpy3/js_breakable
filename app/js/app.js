angular.module('codebuddy', []).
    controller('PersonController', ['$scope', PersonController]);

function PersonController($scope) {
    $scope.name = "Some Person";
};
