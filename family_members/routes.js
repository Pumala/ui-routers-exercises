var app = angular.module('portfolio', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    templateUrl: 'home.html',
    controller: 'HomeController'
  })
  .state({
    name: 'christine',
    url: '/christine',
    templateUrl: 'christine.html'
  })
  .state({
    name: 'winston',
    url: '/winston',
    templateUrl: 'winston.html'
  })
  .state({
    name: 'johnny',
    url: '/johnny',
    templateUrl: 'johnny.html'
  })
  .state({
    name: 'bunky',
    url: '/bunky',
    templateUrl: 'bunky.html'
  })
  .state({
    name: 'ricky',
    url: '/ricky',
    templateUrl: 'ricky.html'
  })

  $urlRouterProvider.otherwise('/');

});
