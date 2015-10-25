describe('Angular Spec', function() {
  var HomeController;
  var AuthController;
  var controller;

  describe('Controller', function() {

    beforeEach(function() {
      module('myApp');
    });

    beforeEach(inject(function ($controller) {
      controller = $controller;
    }));

    it('HomeController should have "unit" property', function() {
      var $scope = {};
      HomeController = controller('HomeController', { $scope: $scope });
      expect($scope.unit).to.be.a('string');
      expect($scope.unit).to.be.truthy;
    });

    it('HomeController should have "name" property', function() {
      var $scope = {};
      HomeController = controller('HomeController', { $scope: $scope });
      expect($scope.name).to.be.a('string');
      expect($scope.name).to.be.truthy;
    });

  });

  describe('Adding Views', function() {

    beforeEach(inject(function ($controller) {
      controller = $controller;
    }));

    it('AboutController should be created', function() {
      var $scope = {};
      expect(controller).withArgs('AuthController', {$scope: $scope}).to.not.throwException();
    });
  });

  // PENDING
  xdescribe('Factories',function() {

    beforeEach(function() {
      try {
        module('myApp');
      } catch(e) {
        console.log('there');
      }
    });
    var MockUserFactory;

    it('description', function() {
     try {
      expect(inject).withArgs(function ($controller, UserFactory) {
        controller = $controller;
        MockUserFactory = UserFactory;
      }).to.throwException();
      } catch(e) {
        console.log('shit');
      }

    });

    beforeEach(inject(function ($controller, UserFactory) {
      controller = $controller;
      MockUserFactory = UserFactory;
    }));

    it('UserFactory should be injected into the HomeController', function() {
      var $scope = {};
      expect(controller).withArgs('HomeController', {$scope: $scope, UserFactory: MockUserFactory}).to.throwException();
      // expect($scope.name).to.be.a('string');
      // expect($scope.name).to.be.truthy;
    });

  });
});

