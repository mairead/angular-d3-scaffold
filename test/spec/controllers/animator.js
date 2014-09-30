'use strict';

describe('Controller: Animator', function () {

  // load the controller's module
  beforeEach(
    function(){
      angular.module('BigData');
    }
  );

  var AnimatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
  	scope = $rootScope.$new();
  	AnimatorCtrl = $controller('Animator as AnimatorCtrl', {$scope: scope});
  }));

  it('should have an element to the page to animate', function () {
    expect(scope.AnimatorCtrl.elementID).toBe('animationElem');
  });
});