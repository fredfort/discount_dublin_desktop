'use strict';


angular.module('discountdublin')
  .controller('MainCtrl',['$scope','$state','API','User', function ($scope,$state, API,User) {
  	$scope.user = User.getUser();

  	$scope.logout = function(){
  		$state.go('login');
  		$scope.user = User.clear();
  	}

  	/*var socket = io('http://localhost:3000/');

    socket.emit('newTransaction');

  	socket.on('talk', function(msg){
        alert(msg);
     });
   */
  }]);
