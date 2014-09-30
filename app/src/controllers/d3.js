var D3 = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('Canvas', Canvas);

  function D3 ($scope) {
	  this.elementID = 'svgElem'
	}

	D3.$inject = ['$scope'];

	return D3;

})();