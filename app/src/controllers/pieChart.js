var PieChart = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('PieChart', PieChart);

  function PieChart ($scope, pieChartFactory) {
  	var vm = this;

    vm.characters = [];

    loadData();

    function loadData(){
      return showData().then(function(){
      })
    }
    function showData(){
    return pieChartFactory.getData()
      .then(function(data){
        vm.characters = data;
        return vm.characters;
      })
    }

	}

	PieChart.$inject = ['$scope', 'pieChartFactory'];

	return PieChart;

})();