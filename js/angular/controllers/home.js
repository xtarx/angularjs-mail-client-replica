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


app.service('mailService', ['$http', '$q', function ($http, $q) {
    var getMail = function () {
        return $http({
            method: 'GET',
            url: '/api/mail'
        });
    }
    var sendEmail = function (mail) {
        var d = $q.defer();
        $http({
            method: 'POST',
            data: mail,
            url: '/api/send'
        }).success(function (data, status, headers) {
            d.resolve(data);
        }).error(function (data, status, headers) {
            d.reject(data);
        });
        return d.promise;
    };
    return {
        getMail: getMail,
        sendEmail: sendEmail
    }
}])
app.controller('SettingsController', ['$scope', function ($scope) {
    $scope.settings = {
        name: "Ari",
        email: "me@example.com"
    }
    $scope.updateSettings = function () {
        console.log("form has been submitted")
    }
	}]);

app.controller('MailListingController', ['$scope', 'mailService', function ($scope, mailService) {
    $scope.email = [];
    $scope.nYearsAgo = 10;

    mailService.getMail()
        .success(function (data, status, headers) {
            $scope.email = data.all;
        }).error(function (data, status, headers) {

        })

    $scope.searchPastNYears = function (email) {
        var emailSentAtDate = new Date(email.sent_at);
        var nYearsAgoDate = new Date();
        nYearsAgoDate.setFullYear(nYearsAgoDate.getFullYear() - $scope.nYearsAgo);
        return emailSentAtDate > nYearsAgoDate;

    }
}]);
app.controller('ContentController', ['$scope', '$rootScope', 'mailService', function ($scope, $rootScope, mailService) {
    $scope.showingReply = false;
    $scope.reply = {};
    $scope.toggleReplyForm = function () {
        $scope.showingReply = !$scope.showingReply;
        $scope.reply = {};
        $scope.reply.to = $scope.selectedMail.from.join(", ");
        $scope.reply.body = "\n\n ----------\n\n" + $scope.selectedMail.body;
    };
    $scope.sendReply = function () {
        $scope.showingReply = false;
        $rootScope.loading = true;
        mailService.sendEmail($scope.reply)
            .then(function (status) {

                    $rootScope.loading = false;
                },
                function (err) {

                    $rootScope.loading = false;
                })
    };

    //watch digest loop to overcome reply window not closing when selected message changes
    $scope.$watch('selectedMail', function (evt) {
        $scope.showingReply = false;
        $scope.reply = {};

    });
}]);
