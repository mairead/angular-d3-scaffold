var filterChart = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .directive('filterChart', filterChart);

  function filterChart () {

  	var directive = {
  		link: link,
      controller: controller,
  		restrict: 'A',
      scope: {
        characters: '='
      },
      templateUrl: "templates/filter-charts.html"
  	}

  	return directive;

    function controller($scope, $attrs){

      $scope.$watch('characters', function(){
        if($scope.characters.length > 0){
          $scope.getCharacterStamina();
        }
      })

      $scope.getCharacterStamina = function(){

        var filters = [];

        _.forEach($scope.characters, function(characterList){
          var characters = d3.values(characterList)[0];
          filters.push(_.pluck(characters, 'stamina'));
        })
        filters = _.flatten(filters);

        //get uniq values
        $scope.filters = _.uniq(filters).sort();

        $scope.populateFilterList();
      };

      $scope.populateFilterList = function(){

      };

      $scope.filterCharts = function(item){
        // console.log("hey", item)
      };

    }

  	function link(scope, element, attrs){

      scope.filters = [0,1,2]

  	}

  }

	return filterChart;

})();