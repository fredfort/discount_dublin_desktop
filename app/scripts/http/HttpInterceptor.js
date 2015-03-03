angular.module('discountdublin').factory('HttpInterceptor',['$location','$q',function($location,$q) {
    var sessionInjector = {

    	request: function(config){
        if(localStorage.token){
          config.headers['x-access-token'] = localStorage.token;
        }
        // if(localStorage.facebook_id){
        //   config.headers['x-access-id'] = localStorage.facebook_id;
        // }
    		return config;
    	},
      response: function(config) {
        return config;
      },
      responseError: function(rejection){
        if(rejection.status === 403 || rejection.status === 401){
          $location.path('/login');
          localStorage.removeItem('token');
        }
        return $q.reject(rejection);    
      }
    };
    return sessionInjector;
}]);