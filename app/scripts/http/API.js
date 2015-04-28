angular.module('discountdublin')

.factory('API',['$http','md5',function($http,md5){
	var nodeAPI = 'http://localhost:3000/';
	//var nodeAPI = 'http://default-environment-tjdrvapm26.elasticbeanstalk.com/';
	var baseURL = nodeAPI;
	var user = null;

	return {
		getCategories :function(category){
			return $http.get(baseURL+'categories');
		},

		getTransactions :function(){
			return $http.get(baseURL+'transactions');
		},

		countTransactions :function(){
			return $http.get(baseURL+'transactions/count');
		},

		login : function(loginInformation){
			return $http.post(baseURL+'merchants',
		    	{'email':loginInformation.email, 'password':md5.createHash(loginInformation.password)});
		},

		setProducts: function(products){
			return $http.post(baseURL+'merchants/products', {'products':products});
		},

		setMerchantConfig: function(coord){
			return $http.put(baseURL+'merchants',{latitude:coord.latitude, longitude:coord.longitude, reach:coord.reach});
		},

		signup : function(loginInformation){
			return $http.post(baseURL+'createmerchant',
		    	{'email':loginInformation.email,'name':loginInformation.name,'password':md5.createHash(loginInformation.password)});
		},

		registerFacebookUser: function(user){
			return $http.post(baseURL+'createuser',
		    	{'email':user.email,'name':user.first_name,'facebook_id':user.id});
		}
	}

}]);