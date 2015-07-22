(function () {
	'use strict';
	var app = angular.module('flightStats');
	app.directive('messagesTable', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/header.html'
		};

	})();