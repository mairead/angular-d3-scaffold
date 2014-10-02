var pieChartFactory = (function () {
  'use strict';

  angular
  .module('chartFactory', ['ngResource'])
  .factory('pieChartFactory', pieChartFactory);

  pieChartFactory.$inject = ['$resource', '$q', '$rootScope', '$http'];

  function pieChartFactory($resource, $q, $rootScope, $http) {

    var service = {
      getData : getData,
      setData : setData
    }

    return service;

    function getData(){
      return $http.get('src/pieChartData.json').then(setData);
    }
    function setData(response){
      //has only retrieved the last item from the data feed? 
      //console.log("data set in factory", response.data);
      return response.data;
    }
  }

  return pieChartFactory;

})();