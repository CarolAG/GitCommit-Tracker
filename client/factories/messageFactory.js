angular
.module('Codesmith.MessageFactory', [])
  .factory('MessageFactory', MessageFactory)

  function MessageFactory($http) {
    return {
        fetch: function() {
          return $http.get('http://slack-server.elasticbeanstalk.com/messages')
        },
        post: function(message) {
          return $http({
            method: 'POST',
            url: 'http://slack-server.elasticbeanstalk.com/messages',
            data: message,
            headers: {'Content-Type': 'application/json'}
          });
        }
    }
};
