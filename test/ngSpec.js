describe('Angular Spec', function() {
  var HomeController;
  var AuthController;
  var controller;
  beforeEach(function() {
    module('myApp');
  });

  beforeEach(inject(function ($controller) {
    controller = $controller;
  }));

  describe('Controller', function() {
    it('HomeController should have "unit" property', function() {
      var $scope = {};
      HomeController = controller('HomeController', { $scope: $scope });
      expect($scope.unit).to.be.a('string');
      expect($scope.unit).to.be.truthy;
    });

    xit('HomeController should have "name" property', function() {
      var $scope = {};
      HomeController = controller('HomeController', { $scope: $scope });
      expect($scope.name).to.be.a('string');
      expect($scope.name).to.be.truthy;
    });

  });

  describe('Adding Views', function() {
    it('AboutController should be created', function() {
      var $scope = {};
      expect(controller).withArgs('AuthController', {$scope: $scope}).to.not.throwException();
    });
  });

  describe('Factories',function() {

  });

  xit('should be registered', inject(function($rootScope, $controller) {
    console.log('first one');
    expect(controller).to.not.be.undefined;
  }));
  xit('should have a homecontroller', function() {
    expect(controller).not.to.equal(null);
  });
  xit('test', function() {
    expect(controller.greeting).to.equal('Hello codesmith!');
  });
  xit('has an array to hold contacts', function() {
    expect(controller.contacts).to.be.a('array');
  });
  xit('has a function "addContact"', function() {
    expect(controller.addContact).to.be.a('function');
  });
  xit('has model contact with firstName, lastName and email properties', function() {
    expect(controller.contact).to.eql({firstName: '', lastName: '', email: ''});
  });
  xit('Adds a contact to the contacts array when you call "addContact" with the fields filled in', function() {
    controller.contact.firstName = 'rob';
    controller.contact.lastName = 'wilkinson';
    controller.contact.email = 'rob@codesmith.io';
    var length = controller.contacts.length;
    controller.addContact();
    expect(controller.contacts.length).not.to.eql(length);
    expect(controller.contacts[controller.contacts.length - 1].firstName).to.equal('rob');
  });
  xit('Resets the contact when you call "addContact" with the fields filled in', function() {
    controller.contact.firstName = 'rob';
    controller.contact.lastName = 'wilkinson';
    controller.contact.email = 'rob@codesmith.io';
    var length = controller.contacts.length;
    controller.addContact();
    expect(controller.contacts.length).not.to.eql(length);
    expect(controller.contact).to.eql({firstName: '', lastName: '', email: ''});
  });
});

