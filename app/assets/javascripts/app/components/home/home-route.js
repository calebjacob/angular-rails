angular
  .module('home')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: '/assets/app/components/home/home-view.html'
      });
  }]);
