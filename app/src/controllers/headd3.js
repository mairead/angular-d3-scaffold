var headD3 = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('headD3', headD3);

  function headD3 ($scope, d3DataFactory) {
	
	  var vm = this;
	  vm.dataItems = [];
    vm.title = "";
	  vm.elementID = 'D3 chart';

	  loadData();

	  function loadData(){
	  	return showData().then(function(){

	  		// console.log("data loaded in controller", vm.dataItems);
	  	})
	  }
	  function showData(){
	  	return d3DataFactory.getData()
	  		.then(function(data){
	  			vm.title = data[0].key;
          vm.dataItems = data;

	  			console.log("data loaded in show method", vm.dataItems );
	  			return vm.dataItems;
	  		})
	  }
	}

	headD3.$inject = ['$scope', 'd3DataFactory'];

	return headD3;

})();