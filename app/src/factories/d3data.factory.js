var d3DataFactory = (function () {
  'use strict';

  angular
  .module('d3Factory', ['ngResource'])
  .factory('d3DataFactory', d3DataFactory);

  d3DataFactory.$inject = ['$resource', '$q', '$rootScope', '$http'];

  function d3DataFactory($resource, $q, $rootScope, $http) {

    var service = {
      getData : getData,
      setData : setData
    }

    return service;

    function getData(){
      return $http.get('src/d3Data.json').then(setData);
    }
    function setData(response){
      //has only retrieved the last item from the data feed? 
      //console.log("data set in factory", response.data);
      return response.data;
    }
  }

  return d3DataFactory;

})();