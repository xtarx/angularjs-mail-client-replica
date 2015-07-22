'use strict';

var app = angular.module('myApp');
app.controller('HomeController', ['$scope', function ($scope) {
    $scope.selectedMail;
    $scope.setSelectedMail = function (mail) {
        $scope.selectedMail = mail;
    };

    $scope.isSelected = function (mail) {
        if ($scope.selectedMail) {
            return $scope.selectedMail === mail;
        }
    };
	}]);
app.controller('SettingsController', ['$scope', function ($scope) {
    $scope.settings = {
        name: "Ari",
        email: "me@example.com"
    }
    $scope.updateSettings = function () {
        console.log("form has been submitted")
    }
	}]);

app.controller('MailListingController', ['$scope', '$http', function ($scope, $http) {
    $scope.email = [];
    $http({
            method: 'GET',
            url: '/api/mail'
        })
        .success(function (data, status, headers) {
            $scope.email = data.all;
        }).error(function (data, status, headers) {

        })
}]);
app.controller('ContentController', ['$scope', function ($scope) {
    $scope.showingReply=false;
    $scope.showReply=function(){
        $scope.showingReply=true;
    };
}]);
