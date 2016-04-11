angular
.module('Github.PostingCommitsFactory', [])
  .factory('PostingCommitsFactory', PostingCommitsFactory)

function PostingCommitsFactory($interval, $http) {
  return {
    post: function(message) {
      return $http({
      method: 'POST',
      url: 'https://api.github.com/repos/carolag/Getty-Hunt/commits',
      data: message,
      headers: {'Content-Type': 'application/json'}
      });
    }
  }
};

//POST /repos/:owner/:repo/git/commits
