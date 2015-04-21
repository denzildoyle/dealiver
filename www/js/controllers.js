angular.module('starter.controllers', [])

// Home Controller
.controller('HomeCtrl', function($scope, $ionicLoading, $ionicPopup, $state, Business){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('Home');}

  $scope.data = {};

  // $scope.clearSearch = function() {
  //   $scope.data.query = '';
  // };

  $ionicLoading.show({
    template: 'Loading...'
  });

  var promise = Business.getBusinesses();

  promise.then(function (result) {
    $scope.businesses = result.data;
  });

  promise.catch(function(error) {
    $ionicPopup.alert({
      title: 'Network Connection Error',
      template: 'Please check your internet connection and try again.'
    }).then(function() {
      $state.go($scope.fromState);
    });
  });

  promise['finally'](function() {
    $ionicLoading.hide();
  });
})

// Who Controller
.controller('WhoCtrl', function($scope){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('Who');}
})

// What Controller
.controller('WhatCtrl', function($scope){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('What');}
})

// Where Controller
.controller('WhereCtrl', function($scope){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('Where');}
})

// When Controller
.controller('WhenCtrl', function($scope){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('When');}
})

// Why Controller
.controller('WhyCtrl', function($scope){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('Why');}
})

// How Controller
.controller('HowCtrl', function($scope){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('How');}
});