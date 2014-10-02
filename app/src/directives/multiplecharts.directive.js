var headMultipleCharts = (function () {
  'use strict';

  angular
    .module('BigData')
    .directive('headMultipleCharts', headMultipleCharts);

  function headMultipleCharts () {

    var directive = {
      controller: controller,
      restrict: 'A',
      replace: true,
      scope: {
        chart: '='
      },
      templateUrl: "templates/chart-control.html"
    };

    return directive;

    function controller($scope, $element, $attrs){

      $scope.removeCharacter = function(characterName){
        var characterArray = d3.values($scope.chart)[0];
        var characterList = d3.keys($scope.chart)[0]

        characterArray = _.filter(characterArray, function (character) {
          return character.name != characterName 
        });

        $scope.chart[characterList] = characterArray;
      }

      $scope.addCharacter = function(data){
        var characterArray = d3.values($scope.chart)[0];
        $scope.newCharacter = null;
        var newCharacter = {
          "name" : data.name,
          "strength": data.strength,
          "stamina": data.stamina
        }
        characterArray.push(newCharacter); 
      }
    };
  }

  return headMultipleCharts;

})();
