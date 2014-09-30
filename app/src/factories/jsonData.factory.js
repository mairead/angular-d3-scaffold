var jsonDataFactory = (function () {
  'use strict';

  angular
  .module('jsonFactory', ['ngResource'])
  .factory('jsonDataFactory', jsonDataFactory);

  jsonDataFactory.$inject = ['$resource', '$q', '$rootScope', '$http'];

  function jsonDataFactory ($resource, $q, $rootScope, $http) {

    var service = {
      getData : getData,
      setData : setData
    }

    return service;

    function getData(){
      return $http.get('src/jsonData.json').then(setData);
    }
    function setData(response){
      //has only retrieved the last item from the data feed? 
      //console.log("data set in factory", response.data);
      return response.data;
    }
  }

  return jsonDataFactory;

})();