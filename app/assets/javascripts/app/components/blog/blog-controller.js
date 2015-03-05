angular
  .module('blog')
  .controller('BlogController', ['$scope', function($scope) {
    $scope.blog.title = 'Bacon Blog';

    $scope.blog.posts = [{
      title: 'Bacon Is Good for the Heart',
      content: 'This post is all about bacon. Here is some more content to read.'
    }];
  }]);
