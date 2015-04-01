angular.module('starter.services', [])

.factory('Registrant', function($http) {
  var backendUrl = '';

  return {
    getBusinesses: function() {
      return $http.get(backendUrl + '/businesses')
    },
    getBusiness: function(id) {
      return $http.get(backendUrl + '/business?id=' + id);
    }
  }
});
