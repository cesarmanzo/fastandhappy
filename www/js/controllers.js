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
   
.controller('mapCtrl', function($scope, $http) {
    $http.post('http://sakhir.hack.att.io:3000/remoteservices/v1/vehicle/bus_info/view/3106295231', {
      "longitude": 36.195814,
      "latitude": -115.157052,
      "accuracy": 6
    }).then(function(response) {
        idrequest = response.data.requestId;
        console.log('Success', response.data.requestId);
        $http.get('http://sakhir.hack.att.io:3000/remoteservices/v1/vehicle/status/3106295231/'+idrequest).then(function(res) {
            $scope.routes = res.data.statusReport;
            console.log('Success', res.data.statusReport);
        })
    })
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