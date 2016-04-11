angular
  .module('Github.myAccountController', ['ngRoute', 'Github.MyCommitsFactory', 'Github.LookupFactory','Github.PostingCommitsFactory'])
  .controller('myAccountController', myAccountController)

  function myAccountController($interval, $scope, PostingCommitsFactory){
//     $scope.post = function() {
//       var message = {
//         created_by: $scope.author,
//         message: $scope.currpost
//       };
//
//       PostingCommitsFactory.post(JSON.stringify(message));
// //     {
// //   "message": "my commit message",
// //   "author": {
// //     "name": "Scott Chacon",
// //     "email": "schacon@gmail.com",
// //     "date": "2008-07-09T16:13:30+12:00"
// //   },
// //   "parents": [
// //     "7d1b31e74ee336d15cbd21741bc88a537ed063a0"
// //   ],
// //   "tree": "827efc6d56897b048c772eb4087f854f46256132"
// // }
  }
