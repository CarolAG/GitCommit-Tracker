angular
.module('Github.LookupFactory', [])
  .factory('projectLookup', projectLookup)

function projectLookup($interval, $http) {
  return {
    fetch: function(search,languageSearch) {
      console.log('search',search);
      console.log('language search',languageSearch);
      var proj = search;
      var language = languageSearch;
      return $http.get('https://api.github.com/search/repositories?q='+ proj +'language:'+ language +'&sort=stars&order=desc')
    }
  }
};
