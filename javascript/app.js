var craigslistApp = angular.module('craigslistApp', []);

craigslistApp.controller('postViewerCtrl', function CraigstlistListCtrl($scope, $http) {
  $http.get('feed/feed.json').success(function(data) {
    $scope.phones = data;
  });
});