// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts, vendor/assets/components,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require bower_components/angular/angular
//= require bower_components/angular-resource/angular-resource
//= require bower_components/angular-route/angular-route 
//= require_tree .

angular.module('app', ['ngRoute']);



angular.module('app').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'TestController',
      templateUrl: '/assets/test.html'
    })

    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});


 
angular.module('app').controller('TestController', function($scope) {
  $scope.title = "Bacon!";
});
