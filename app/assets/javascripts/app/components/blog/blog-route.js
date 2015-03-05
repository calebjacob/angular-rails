angular
  .module('blog')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'BlogController',
        templateUrl: '/assets/app/components/blog/blog-view.html'
      });
  }]);
