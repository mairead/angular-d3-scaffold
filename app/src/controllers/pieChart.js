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

    $scope.addCharacter = function(data) {
      vm.newCharacter = null;
      console.log("data added", data);
      var newCharacter = {
        "name" : data.name,
        "strength": data.strength
      }
      vm.chartData.push(newCharacter);
    };

    $scope.removeCharacter = function(characterName){
      //retrieve object from array where name matches item passed
      vm.chartData = _.filter(vm.chartData, function (character) {
        return character.name != characterName 
      });
    }
	}

	PieChart.$inject = ['$scope'];

	return PieChart;

})();