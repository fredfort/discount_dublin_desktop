'use strict';


angular.module('discountdublin')
  .controller('ProductsCtrl',['$scope','$anchorScroll', '$location','toaster','API','User','categories', function ($scope,$anchorScroll,$location,toaster,API,User,categories) {
    $scope.categories = categories.data;

  	$scope.moreProducts = function(){
      var randomId = Math.floor((Math.random() * 1000000)+1);
  		$scope.user.products.push({name:'',state:randomId, active:true,quantity:1,description:''});
      $location.hash(randomId);
      //window.socket.emit('transaction','hey');

  	};

  	$scope.removeProduct = function(product){;
  		$scope.user.products = _.without($scope.user.products, product);
  	};

  	$scope.saveProducts = function(){
      API.setProducts($scope.user.products).success(function(products){
        User.setUser($scope.user);
         toaster.pop('success','Products saved');
      }).error(function(err){
        toaster.pop('error','Products could not be saved');
      });
  	};

  }]);

