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
    $scope.showingReply = false;
    $scope.reply = {};
    $scope.toggleReplyForm = function () {
        $scope.showingReply = !$scope.showingReply;
        $scope.reply = {};
        $scope.reply.to = $scope.selectedMail.from.join(", ");
        $scope.reply.body = "\n\n ----------\n\n" + $scope.selectedMail.body;
    };
    
    //watch digest loop to overcome reply window not closing when selected message changes

    $scope.$watch('selectedMail',function(evt){
        $scope.showingReply=false;
        $scope.reply={};
        
    });
}]);
