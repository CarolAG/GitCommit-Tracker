angular
.module('Codesmith.UserFactory', [])
  .factory('UserFactory', UserFactory)

  function UserFactory() {
    return {
      name: "Carol",
      age: 25
    }
  };
