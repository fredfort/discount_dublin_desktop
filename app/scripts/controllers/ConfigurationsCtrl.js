'use strict';

angular.module('discountdublin')
.controller('ConfigurationsCtrl',['$scope','toaster','API','User', function ($scope,toaster,API,User) {

	$scope.createCircle = function(map,lat,lng){
		return L.circle([lat,lng], $scope.user.reach, {
		    color: 'red',
		    fillColor: '#f03',
		    fillOpacity: 0.5
		}).addTo(map);
	};

	$scope.init = function(){

		var map = L.map('map').setView([$scope.user.latitude,$scope.user.longitude], 14);

		// add an OpenStreetMap tile layer
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		var myIcon = L.icon({
		    iconUrl: 'images/marker-icon.png',
		    iconRetinaUrl: 'images/marker-icon@2x.png',
		    /*iconSize: [38, 95],*/
		    iconAnchor: [22, 32],
		   /* popupAnchor: [-3, -76],*/
		    shadowUrl: 'images/marker-shadow.png',
		    shadowRetinaUrl: 'images/marker-shadow.png',
		    /*shadowSize: [68, 95],
		    shadowAnchor: [22, 94]*/
		});

		var circle = $scope.createCircle(map,$scope.user.latitude,$scope.user.longitude);

		var marker = L.marker([$scope.user.latitude,$scope.user.longitude],{draggable:true,icon: myIcon});

		marker.on('dragend', function(event){
			var marker = event.target;
			var position = marker.getLatLng();
			
			$scope.$apply(function(){
				$scope.user.latitude  = position.lat;
				$scope.user.longitude = position.lng;
				map.removeLayer(circle);
				circle = $scope.createCircle(map,position.lat, position.lng);
			});
		});

		marker.on('drag', function(event){
			var marker = event.target;
			var position = marker.getLatLng();
		
			$scope.$apply(function(){
				$scope.user.latitude  = position.lat;
				$scope.user.longitude = position.lng;
				map.removeLayer(circle);
				circle = $scope.createCircle(map,position.lat, position.lng);
			});
		});

		marker.addTo(map);

		var slider = new Slider('#slider',{
				value: parseInt($scope.user.reach),
				min:50,
				step:50,
				max:10000,
				handle:"round"
		});    

		$scope.reach = $scope.user.reach;
		slider.on('change', function(){
			$scope.user.reach = slider.getValue();
			map.removeLayer(circle);
			circle = $scope.createCircle(map,$scope.user.latitude,$scope.user.longitude);
		});
		
	}

	$scope.saveConfig = function(){
		API.setMerchantConfig({latitude:$scope.user.latitude,longitude:$scope.user.longitude,reach:$scope.user.reach})
			.success(function(res){
				User.setUser($scope.user);
				toaster.pop('success','Settings has been changed');
			})
			.error(function(err){
				toaster.pop('success','Settings has been changed');
			})
	};

	$scope.init();
}]);



