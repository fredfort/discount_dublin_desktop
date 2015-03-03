'use strict';


angular.module('discountdublin')
  .controller('LoginCtrl',['$scope','$state','API','User', function ($scope,$state, API,User) {


  	$scope.signup = function(){
  		API.signup({email:$scope.email, password: $scope.password,name:$scope.name}).success(function(res){
        localStorage.setItem('token', res.token);
        res.user.password = null;
        User.setUser(res.user);
        $scope.loginError = "";
        $state.go('main.dashboard');

      }).error(function(error){
        $scope.loginError = "An error has occured";
      });
  	};


  	$scope.signin = function(){
  		API.login({email:$scope.email, password: $scope.password}).success(function(res){
  			localStorage.setItem('token', res.token);
        res.merchant.password = null;
  			User.setUser(res.merchant);
  			$scope.loginError = "";
  			$state.go('main.dashboard');

  		}).error(function(error){
  			$scope.loginError = "Email and/or password is incorrect";
  		});
  		
  	};

  }]);
