var dummyFactory = (function () {
  'use strict';

  angular
  .module('BigDataFactories', ['ngResource'])
  .factory('dummyFactory', dummyFactory);

  dummyFactory.$inject = ['$resource', '$q', '$rootScope', '$http'];

  function dummyFactory ($resource, $q, $rootScope, $http) {

    var service = {
      getData : getData,
      setData : setData
    }

    return service;

    function getData(){
      return $http.get('src/dummy.json').then(setData);
    }
    function setData(response){
      //has only retrieved the last item from the data feed? 
      //console.log("data set in factory", response.data);
      return response.data;
    }
  }

  return dummyFactory;

})();