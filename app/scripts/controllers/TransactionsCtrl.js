'use strict';


angular.module('discountdublin')
  .controller('TransactionsCtrl', ['$scope','transactions',function ($scope,transactions) {
  		$scope.transactions = transactions.data;   
  }]);
