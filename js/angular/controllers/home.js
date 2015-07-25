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

app.directive('emailListing', function () {
    var url = "http://www.gravatar.com/avatar/";

    return {
        restrict: 'EA',
        replace: false,
        //if set to false then will append, else replace
        // if set to true then a new scope will be created
        //isolate scopes indendted of parent scopes
        scope: {
            email: '=', //accept an object as a param
            action: '&', //accept a fun as a  param
            shouldUseGravatar: '@', //accept a string as a param
            gravatarSize: '@', //accept a string as a param

        },
        transclude: true,
        templateUrl: 'js/angular/templates/emailListing.html',
        //link: // called after compile fun, set listenrs, watchers  form DOM manuplation
        controller: ['$scope', '$element', '$attrs', '$transclude',
                    function ($scope, $element, $attrs, $transclude) {
                $scope.handleClick = function () {
                    $scope.action({
                        selectedMail: $scope.email
                    });
                }
                   }
                   ],
        link: function (scope, element, attrs) {
            var size = attrs.gravatarSize || 80;

            //scope.gravatarImage="haha";
            var hash = 'b3e04a46e85ad3e165d66f5d927eb609';
            scope.gravatarImage = url + hash + '?s=' + size;
            element.bind('click', function () {
                //remove class in any other elements
                element.parent().children().removeClass('selected');
                element.addClass('selected');
            });
        }
    };
});
