var PieChart = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('PieChart', PieChart);

  function PieChart ($scope) {
  	var vm = this;

  	vm.chartData = [
  		{"name": "He Man", "strength": 30},
  		{"name": "She Ra", "strength": 20},
  		{"name": "Cringer", "strength": 15},
      {"name": "Swift Wind", "strength": 45}
  	];
	}

	PieChart.$inject = ['$scope'];

	return PieChart;

})();