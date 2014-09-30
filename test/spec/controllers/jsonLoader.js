'use strict';

describe('Controller: JsonLoader', function () {

  // load the controller's module
  beforeEach(
    function(){
      module('BigData');
      
    }
  );

  var JsonLoadCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {


  	scope = $rootScope.$new();
  	JsonLoadCtrl = $controller('JsonLoader as JsonLoadCtrl', {$scope: scope});

    //to test JSON factory you have to mock, like you would
    //mock an HTTP rest service

    //I guess you are only testing the controller in this spec

    //maybe the other belongs in the e-2-e test? or not at all?

    //http://stackoverflow.com/questions/18258490/testing-resource-services-in-angularjs

  }));

  // it('should have data returned', function () {
    //need to call mock service and controller load method
    // to retrieve promise data
  //   expect(scope.JsonLoadCtrl.JsonData).toBeDefined();
  // });

  // it('can get an instance of my factory', function() {
    //I don't think this test is useful. it would be testing a mock
  //   expect(dummyFactory).toBeDefined();
  // });
});