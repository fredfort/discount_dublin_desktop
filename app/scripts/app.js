'use strict';

/**
 * @ngdoc overview
 * @name discountdublin
 * @description
 * # discountdublin
 *
 * Main module of the application.
 */
angular
  .module('discountdublin', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'angular-md5',
    'xeditable',
    'toaster'
    //'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {

    $httpProvider.interceptors.push('HttpInterceptor');


    $urlRouterProvider.otherwise('/login');

    //
    // Now set up the states
    $stateProvider
      .state('main',{
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        abstract:true
      })
      .state('login',{
        url:'/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('main.dashboard',{
        url:'dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        resolve:{
          transactions:['API', function(API){
            return API.getTransactions();
          }]
        }
      })
      .state('main.configuration', {
        url: 'configuration',
        templateUrl: 'views/configuration.html',
        controller: 'ConfigurationsCtrl'
      })
      .state('main.products', {
        url: 'products',
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        resolve:{
          categories:['API', function(API){
            return API.getCategories();
          }]
        }
      })
      .state('main.transactions', {
        url: 'transactions',
        templateUrl: 'views/transactions.html',
        controller: 'TransactionsCtrl',
        resolve:{
          transactions:['API', function(API){
            return API.getTransactions();
          }]
        }
      });

  });
