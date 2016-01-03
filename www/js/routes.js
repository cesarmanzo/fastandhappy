angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.myRoutes', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/myRoutes.html',
          controller: 'myRoutesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.map', {
      url: '/page3',
      views: {
        'tab5': {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.allRoutes', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/allRoutes.html',
          controller: 'allRoutesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('routeDetails', {
      url: '/page7',
      templateUrl: 'templates/routeDetails.html',
      controller: 'routeDetailsCtrl'
    })
        
      
    
      
        
    .state('tabsController.settings', {
      url: '/page5',
      views: {
        'tab6': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page3');

});