'use strict';

describe('Controller: Canvas', function () {

  // load the controller's module
  beforeEach(
    function(){
      angular.module('BigData');
    }
  );

  var CanvasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
  	scope = $rootScope.$new();
  	CanvasCtrl = $controller('Canvas as CanvasCtrl', {$scope: scope});
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.CanvasCtrl.elementID).toBe('canvasElem');
  });
});