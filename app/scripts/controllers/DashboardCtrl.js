'use strict';

angular.module('discountdublin')
.controller('DashboardCtrl',['$scope','nbtransactions', function ($scope,nbtransactions) { 
	$scope.nbtransactions = nbtransactions.data.nbElem;
}]);

