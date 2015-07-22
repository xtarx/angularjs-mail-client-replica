'use strict';

var app = angular.module('myApp');
app.controller('HomeController', ['$scope', function ($scope) {

	}]);
app.controller('SettingsController', ['$scope', function ($scope) {

    $scope.updateSettings = function () {
        console.log("form has been submitted")
    }
	}]);
