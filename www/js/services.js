angular.module('starter.services', [])

.factory('Business', function($http) {
  var backendUrl = 'https://localhost/Dealiver-backend/api/v1';

  return {
    getBusinesses: function() {
      return $http.get(backendUrl + '/businesses')
    },
    getBusiness: function(id) {
      return $http.get(backendUrl + '/business?id=' + id);
    }
  }
});
