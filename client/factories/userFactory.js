angular
.module('Github.MyCommitsFactory', [])
  .factory('MyCommitsFactory', MyCommitsFactory)

  function MyCommitsFactory($interval, $http) {
    return {
      fetch: function(owner, repo) {
         console.log('owner',owner);
        console.log('repo',repo);
        return $http.get('https://api.github.com/repos/' + owner +'/' + repo +'/commits')
      }
    }
  };


  
// GET /search/code
//https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery

 // /repos/:owner/:repo/commits
 // https://api.github.com/repos/carolag/Getty-Hunt/commits
