angular.module('app.controllers', [])
  
.controller('myRoutesCtrl', function($scope, $http) {
    $http.get('../myroutes.json').then(function(response) {
        $scope.routes = response.data;
        console.log('Success', response.data);
    // For JSON responses, response.data contains the result
      }, function(err) {
        console.error('ERR', err);
    // err.status will contain the status code
  })
})
   
.controller('mapCtrl', function($scope) {

})
   
.controller('allRoutesCtrl', function($scope, $http) {
    $http.get('../busroutes.json').then(function(response) {
        $scope.routes = response.data;
        console.log('Success', response.data);
    // For JSON responses, response.data contains the result
      }, function(err) {
        console.error('ERR', err);
    // err.status will contain the status code
  })
})

.controller('routeDetailsCtrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope) {

})