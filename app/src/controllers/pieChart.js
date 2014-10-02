var PieChart = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('PieChart', PieChart);

  function PieChart ($scope) {
  	var vm = this;

  	vm.chartData = [
  		{"name": "He Man", "strength": 25},
  		{"name": "She Ra", "strength": 25},
  		{"name": "Cringer", "strength": 25},
      {"name": "Swift Wind", "strength": 25}
  	];

    vm.characters = [
      {"Grayskull":[
        {"name": "He Man", "strength": 25},
        {"name": "She Ra", "strength": 25},
        {"name": "Cringer", "strength": 25},
        {"name": "Swift Wind", "strength": 25}
      ]},
      {"Thundercats":[ 
        {"name": "Panthero", "strength": 10},
        {"name": "Tigra", "strength": 20},
        {"name": "Liono", "strength": 30},
        {"name": "Cheetara", "strength": 40}
      ]},
      {"Muskehounds":[
        {"name": "Dogtanian", "strength": 15},
        {"name": "Athos", "strength": 25},
        {"name": "Aramis", "strength": 35}
      ]}
    ];

	}

	PieChart.$inject = ['$scope'];

	return PieChart;

})();