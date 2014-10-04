var filterChart = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .directive('filterChart', filterChart);

    filterChart.$inject = ['$compile'];

  function filterChart ($compile) {

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


    function controller($scope, $attrs, $element){

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

      };

      $scope.filterCharts = function(item){
        // console.log("hey", item)
      };

    }

  	function link(scope, element, attrs){

      //have to dynamically compile template as filter values are retrieved after link runs
      scope.$watch(scope.filters, function(){
        var template = "<div ng-repeat='item in filters'>{{item}}<div>";
        var content = $compile(template)(scope);;
        element.append(content);
      })
  	}

  }

	return filterChart;

})();