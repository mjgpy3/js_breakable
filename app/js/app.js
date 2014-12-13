var PersonController = function ($scope, $http) {
    $scope.name = "Some Person";

    $http.get('https://api.github.com/users/' + $scope.name + '/events').
      success(function(data, status, headers, config) {
          $scope.events = data;
      }).
      error(function(data, status, headers, config) {
          $scope.error = "Could not get activity for '" + $scope.name + "'";
      });
};

angular.module('codeBuddy', []).
  controller('PersonController', ['$scope', PersonController]);
