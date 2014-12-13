var app = angular.module('codeBuddy', ['controllers']);

var controllers = angular.module('controllers', ['angoose.client']);

controllers.controller('PersonController', ['$scope', '$http', function ($scope, $http, codeInfo) {
    $scope.name = codeInfo.findOne().github.username;
    $scope.events = [];

    $scope.findEvents = function () {
        $http.get('https://api.github.com/users/' + $scope.name + '/events?per_page=5').
          success(function(data, status, headers, config) {
              $scope.events = data;
          }).
          error(function(data, status, headers, config) {
              $scope.error = "Could not get activity for '" + $scope.name + "'";
              console.log($scope.error);
              $scope.events = [];
          });
    }
}]);
