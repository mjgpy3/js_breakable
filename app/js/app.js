var app = angular.module('codeBuddy', ['controllers']);

var controllers = angular.module('controllers', []);

controllers.controller('PersonController', ['$scope', '$http', function ($scope, $http) {
    $scope.name = "Some Person";

    $http.get('https://api.github.com/users/' + $scope.name + '/events').
      success(function(data, status, headers, config) {
          $scope.events = data;
      }).
      error(function(data, status, headers, config) {
          $scope.error = "Could not get activity for '" + $scope.name + "'";
      });
}]);
