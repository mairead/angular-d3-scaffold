var JsonLoader = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('JsonLoader', JsonLoader);

  function JsonLoader ($scope, jsonDataFactory) {
  	var vm = this;
	  
	  vm.dataItems = [];

	  vm.jsonData = showData();

	  loadData();

	  function loadData(){
	  	return showData().then(function(){

	  		//console.log("data loaded in controller", vm.dataItems);
	  	})
	  }
	  function showData(){
	  	return jsonDataFactory.getData()
	  		.then(function(data){
	  			vm.dataItems = data;
	  			//console.log("data loaded in show method", vm.dataItems);
	  			return vm.dataItems;
	  		})
	  }
	}

	JsonLoader.$inject = ['$scope', 'jsonDataFactory'];

	return JsonLoader;

})();