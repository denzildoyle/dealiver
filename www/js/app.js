// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // initialize Google Analytics
    if(typeof analytics !== "undefined") {
        analytics.startTrackerWithId("UA-38539184-10");
    } else {
        console.log("Google Analytics Unavailable");
    }
  });
})

//ui state references
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.who', {
    url: '/who',
    views: {
      'menuContent': {
        templateUrl: 'templates/who.html',
        controller: 'WhoCtrl'
      }
    }
  })

  .state('app.what', {
    url: '/what',
    views: {
      'menuContent': {
        templateUrl: 'templates/what.html',
        controller: 'WhatCtrl'
      }
    }
  })

  .state('app.where', {
    url: '/where',
    views: {
      'menuContent': {
        templateUrl: 'templates/where.html',
        controller: 'WhereCtrl'
      }
    }
  })

  .state('app.when', {
    url: '/when',
    views: {
      'menuContent': {
        templateUrl: 'templates/when.html',
        controller: 'WhenCtrl'
      }
    }
  })

  .state('app.how', {
    url: '/how',
    views: {
      'menuContent': {
        templateUrl: 'templates/how.html',
        controller: 'HowCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/');
});
