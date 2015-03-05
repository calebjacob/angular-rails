angular
  .module('blog')
  .factory('BlogFactory', ['$http', function BlogFactory($http) {
    var factory = {
      getAllPosts: getAllPosts
    };

    // Finish building out this mock factory. Make sure JS files are being loaded in correct order.

    function getAllPosts() {
      return $http
        .get('http://ip.jsontest.com/')
        .then(function(data) {
          console.log('Did a JSON fetch!');
        })
        .catch(function(data, status, headers) {
          console.log('Oops! That JSON fetch did not work.');
        })
    };
  }]);
