'use strict';
var app = angular.module('app',['ui.router','ngAnimate']);

app.run(function($rootScope) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		$rootScope.load = true;

	});

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		$rootScope.load = false;
	});
})



	app.config(function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url : '/',
			templateUrl : Routing.generate('loadTpl', { tpl: 'home' }),
			controller : 'appCtrl'
		})
		.state('lettre', {
			url : '/lettre',
			templateUrl : Routing.generate('loadTpl', { tpl: 'lettre' }),
			controller : 'lettreCtrl'
		})
		.state('cv', {
			url : '/cv',
			templateUrl : Routing.generate('loadTpl', { tpl: 'cv' }),
			controller : 'cvCtrl'
		});

	});

	app.controller('appCtrl',function($rootScope,$scope,$timeout) {

	$timeout(function(){

		$scope.animation = "animation";
	}, 1);


});

	app.controller('lettreCtrl',function($rootScope,$scope,$timeout) {
	
		$timeout(function(){

			$scope.animation = "animation";
		}, 1);

	});

	app.controller('cvCtrl',function($rootScope,$scope,$timeout) {
	
		$timeout(function(){

			$scope.animation = "animation";
		}, 1);


	});
