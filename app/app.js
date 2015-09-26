'use strict';

var app = angular.module('framework', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 
	function($urlRouterProvider, $stateProvider, $locationProvider) {
		$urlRouterProvider
			.when('/', '/framework/home')
			.otherwise('/framework/home');
		$stateProvider
			.state('framework', {
				url: '/framework/home',
				templateUrl: 'features/home/home.html',
				controller: 'homeCtrl'
			});
		$locationProvider.html5Mode(true);
	}]);