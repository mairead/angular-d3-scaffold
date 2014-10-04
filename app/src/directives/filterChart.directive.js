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

      $scope.selectedFilters = [];
      $scope.unSelectedFilters = []; //these are the values we actually want to strip 
      $scope.possibleFilters = [];
      $scope.filters = [];

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
        var uniqFilters =_.uniq(filters).sort()
        _.forEach(uniqFilters, function(v, i){
          $scope.filters.push({value:true, stamina: v, index:i})
        });

        //set selected filters to all be true when constructed
        _.forEach($scope.filters, function(v){
          $scope.selectedFilters.push(v.stamina);
          //possible filters is a checking mechanism to determine the possible values
          $scope.possibleFilters.push(v.stamina);
        });
      };

      $scope.filterCharts = function(item){

        var characterArray = d3.values($scope.characters);

        //need to hold a running list of all selected filters
        //need to run a check against the list with every click
        //if the input is checked/true then add to the selected list
        if(item.value){
          //union only adds unique values, won't re-add if its already there
          $scope.selectedFilters = _.union($scope.selectedFilters, [item.stamina]);
        }else{ //else remove from the selected list
          //without removes provided values from an array
          $scope.selectedFilters = _.without($scope.selectedFilters, item.stamina);
        }

        //construct array of missing values
        $scope.unSelectedFilters = _.xor($scope.possibleFilters, $scope.selectedFilters);
      
        //TODO: Can these multiple for each loops be translated into a map function instead? 
        //how to use better functional programming methods instead

        //determine which items in vm.characters have stamina that match selected
        _.forEach($scope.unSelectedFilters, function(v){
            var staminaFilter = v;
          _.forEach(characterArray, function(v, i){
            var characterArray = v;
            var characterList = d3.keys(v)[0];
    
            var filteredCharacters = _.filter(d3.values(v)[0], function (character) {
              return character.stamina != staminaFilter;
            });
            //udpate scope on characters with selected list
            characterArray[characterList] = filteredCharacters;

            //TODO: this is destructive. Can't add items back in :(
              //Should this be a custom filter? using the filter options

          })
        })

      };

    }

  	function link(scope, element, attrs){
      scope.$watch(scope.filters, function(){
        //have to dynamically compile template as 
        //filter values are retrieved after link runs
        $compile(this.template)(scope);
      });
  	}

  }

	return filterChart;

})();