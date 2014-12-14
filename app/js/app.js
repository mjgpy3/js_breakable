var app = angular.module('codeBuddy', ['codeBuddy.controllers', 'codeBuddy.factories']);

angular.module('codeBuddy.controllers', []).
  controller('PersonController', ['$scope', '$http', 'person', function ($scope, $http, person) {
    $scope.name = person('1').github.username;
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
  factory('person', ['mongolabGet', function (mongolabGet) {
      return function (personId) {
          return mongolabGet({ userId: '1' });
      };
  }]).
  factory('mongolabGet', ['$http', function ($http) {
      return function (query) {
          var mongoLabApiURL = 'https://api.mongolab.com/api/1/';
          $http.get(mongoLabApiURL + 'databases/' +
              process.env.MONGO_DATABASE +
              '/collections/' +
              process.env.MONGO_COLLECTION +
              '?q=' + JSON.stringify(query) + '&c=true&apiKey=' +
              process.env.MONGOLAB_API_KEY).
            success(function (data) {
                return data;
            }).error(function () {
                console.log("Mongolab failed to get " + JSON.stringify(query));
            })
      };
  }]);
