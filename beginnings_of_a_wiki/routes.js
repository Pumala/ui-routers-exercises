var app = angular.module('wiki-app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'page_view',
    url: '/{page_name}',
    templateUrl: 'page_view.html',
    controller: 'PageViewController'
  })
  .state({
    name: 'edit_page',
    url: '/{page_name}/edit',
    templateUrl: 'edit_page_view.html',
    controller: 'PageEditController'
  })

});

// do not need to include 'ng-controller="PageViewController"' in html
// because the app.config => .state knows about its presence
app.controller('PageViewController', function($scope, $stateParams) {
  $scope.pageName = $stateParams.page_name;
  $scope.page = pages[$scope.pageName];
  if (!$scope.pageName ) {
    $scope.page = new WikiPage($scope.pageName, 'This page does not exist yet.');
  }
});

// do not need to include 'ng-controller="EditPageViewController"' in html
// because the app.config => .state knows about its presence
app.controller('PageEditController', function($scope, $stateParams, $location) {
  $scope.pageName = $stateParams.page_name;
  $scope.page = pages[$scope.pageName];

  $scope.editPage = function() {
    $location.path('/' + $scope.pageName);
    // $scope.page.content;
    // pages[pageName].content = content;
  }
});

function WikiPage(title, content) {
  this.title = title;
  this.content = content;
}

var pages = {
  Python: new WikiPage('Python', 'Python is a fun to use programming language. It is great for beginners.'),
  HTML: new WikiPage('HTML', 'HTML is the markup language used for making pages on the world wide web.')
};
