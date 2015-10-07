'use strict';

var moduleName = 'framework';

var app = angular.module(moduleName, ['ui.router']);

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
angular.bootstrap(document.documentElement, [moduleName], {strictDi: true});