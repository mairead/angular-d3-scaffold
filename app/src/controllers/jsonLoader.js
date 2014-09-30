var JsonLoader = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('JsonLoader', JsonLoader);

  function JsonLoader ($scope, dummyFactory) {
  	var vm = this;
	  
	  vm.dataItems = [];

	  vm.JsonData = showData();

	  loadData();

	  function loadData(){
	  	return showData().then(function(){

	  		//console.log("data loaded in controller", vm.dataItems);
	  	})
	  }
	  function showData(){
	  	return dummyFactory.getData()
	  		.then(function(data){
	  			vm.dataItems = data;
	  			//console.log("data loaded in show method", vm.dataItems);
	  			return vm.dataItems;
	  		})
	  }
	}

	JsonLoader.$inject = ['$scope', 'dummyFactory'];

	return JsonLoader;

})();