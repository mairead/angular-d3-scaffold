var Animator = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .controller('Animator', Animator);

  function Animator ($scope) {
  	var vm = this;

  	vm.animationItems = [
  		{"name": "block1"},
  		{"name": "block2"},
  		{"name": "block3"}
  	]
	  vm.elementID = 'Animations'


	}

	Animator.$inject = ['$scope'];

	return Animator;

})();