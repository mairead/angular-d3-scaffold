var Canvas = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('Canvas', Canvas);

  function Canvas ($scope) {
	  this.elementID = 'canvasElem'
	}

	Canvas.$inject = ['$scope'];

	return Canvas;

})();