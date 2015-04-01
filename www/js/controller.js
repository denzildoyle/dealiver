angular.module('starter.controllers', [])

// Home Controller
.controller('HomeCtrl', function($scope){
  // track page view
  if(typeof analytics !== "undefined") { analytics.trackView('Home');}
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