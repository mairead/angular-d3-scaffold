'use strict';

describe('directive: hoverAnim', function() {
  var element, scope;

  beforeEach(module('BigData'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element =
        '<div class="animation-block" head-hover-anim><p>block1</p></div>';

    element = $compile(element)(scope);
    scope.$digest();
  }));

  //Cant really test the mouseover class being added
  //Should this be an e-2-e test where you can mock user interaction? 
});