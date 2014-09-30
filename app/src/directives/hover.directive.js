var headHoverAnim = (function () {
  'use strict';

  angular
	  .module('BigData')
	  .directive('headHoverAnim', headHoverAnim);

  function headHoverAnim ($animate) {

  	var directive = {
  		link: link,
  		restrict: 'A'
  	}

  	return directive;

  	function link(scope, element, attrs){
  	
  		element.bind("mouseover", function () {
        element.addClass('anim-fade-out');
      });

      element.bind("mouseleave", function () {
      	element.removeClass('anim-fade-out');
      });
  	}

  }

	return headHoverAnim;

})();