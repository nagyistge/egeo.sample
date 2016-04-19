describe('controller.test', function() {
  var scope, $httpBackend, createController;

  beforeEach(angular.mock.module('myApp'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should return a test string', function() {
    var $scope = {};
		var controller = $controller('TestController', { $scope: $scope });
    expect(controller.test()).toBe('test');
  });
});
