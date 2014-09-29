'use strict';

describe('Controller: Dashboard', function () {

  // load the controller's module
  beforeEach(
    function(){
      angular.module('BigData');
    }
  );

  var DashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
  	scope = $rootScope.$new();
  	DashCtrl = $controller('Dashboard as DashCtrl', {$scope: scope});
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.DashCtrl.awesomeThings.length).toBe(3);
  });
});