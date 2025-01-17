'use strict';

/**
 * @ngdoc overview
 * @name labrpgApp
 * @description
 * # labrpgApp
 *
 * Main module of the application.
 */
angular
  .module('labrpgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/player', {
        templateUrl: 'views/player.html',
        controller: 'PlayerCtrl',
        controllerAs: 'player'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .when('/labinfo', {
        templateUrl: 'views/labinfo.html',
        controller: 'LabinfoCtrl',
        controllerAs: 'labinfo'
      })
      .when('/component', {
        templateUrl: 'views/component.html',
        controller: 'ComponentCtrl',
        controllerAs: 'component'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
