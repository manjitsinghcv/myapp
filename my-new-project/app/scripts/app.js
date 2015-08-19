'use strict';

/**
 * @ngdoc overview
 * @name futureApp
 * @description
 * # futureApp
 *
 * Main module of the application.
 */
angular
  .module('futureApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  // Bellow are the five path routes for five icons which are added on default app
	        .when('/whatwedo', {
        templateUrl: 'views/whatwedo.html',
        controller: 'whatwedoCtrl',
        controllerAs: 'whatwedo'
      })
	        .when('/ourwork', {
        templateUrl: 'views/ourwork.html',
        controller: 'ourworkCtrl',
        controllerAs: 'ourwork'
      })
	        .when('/technology', {
        templateUrl: 'views/technology.html',
        controller: 'technologyCtrl',
        controllerAs: 'technology'
      })
	  
	        .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'aboutusCtrl',
        controllerAs: 'aboutus'
      })
	  
	  	        .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'contactusCtrl',
        controllerAs: 'contactus'
      })
	  
	  
	  
      .otherwise({
        redirectTo: '/'
      });
  });
