/**
 * UserFactory belongs here
 */

angular
  .module('Codesmith.Users', [])
  .factory('UserFactory', UserFactory);


function UserFactory() {
  return {name: 'default'}
}