angular.module('discountdublin')

.factory('User',function(){
	var user = null;
	return {
		setUser: function(user){
			this.user = user;
			localStorage.user = JSON.stringify(user);
		},
		getUser: function(){
			return this.user || JSON.parse(localStorage.user) || {};
		},
		clear: function(){
			localStorage.user = null;
			return null;
		}
	}

});