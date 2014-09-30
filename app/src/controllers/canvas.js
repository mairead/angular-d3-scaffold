var Canvas = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('Canvas', Canvas);

  function Canvas ($scope) {
	  this.elementID = 'Canvas Element'
	}

	Canvas.$inject = ['$scope'];

	return Canvas;

})();