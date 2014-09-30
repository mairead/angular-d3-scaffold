'use strict';

describe('Controller: D3', function () {

  // load the controller's module
  beforeEach(
    function(){
      angular.module('BigData');
    }
  );

  var D3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
  	scope = $rootScope.$new();
  	D3Ctrl = $controller('D3 as D3Ctrl', {$scope: scope});
  }));

  it('should attach have an element to attach to', function () {
    expect(scope.D3Ctrl.elementID).toBe('svgElem');
  });
});