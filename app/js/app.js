var app = angular.module('codeBuddy', ['codeBuddy.controllers', 'codeBuddy.factories']);

angular.module('codeBuddy.controllers', []).
  controller('PersonController', ['$scope', '$http', 'User', function ($scope, $http, User) {
    $scope.name = User('1').github.username;
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

    $scope.findEvents();
}]);

angular.module('codeBuddy.factories', []).
  factory('User', ['$http', function ($http) {
      return function (qualifier) {
          return $http.get('/user/' + qualifier).success(function (data) {
              return data;
          }).error(function () {
              console.log("Failed to get User: " + qualifier);
          });
      };
  }]);
