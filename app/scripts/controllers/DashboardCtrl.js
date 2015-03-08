'use strict';

angular.module('discountdublin')
.controller('DashboardCtrl',['$scope','transactions', function ($scope,transactions) { 
	$scope.transactions = transactions.data;
}]);

