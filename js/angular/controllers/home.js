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
        // return $http({method: 'GET',url: '/api/mail'});
        return [
        {
            "body": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
            "subject": "vel accumsan tellus nisi",
            "from": "amontgomery0@jiathis.com",
            "sent_at": "2011-04-09 10:17:55",
            "to": "me@example.com"
            },
        {
            "body": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
            "subject": "posuere",
            "from": "pshaw1@studiopress.com",
            "sent_at": "2011-02-14 14:27:00",
            "to": "me@example.com"
            },
        {
            "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
            "subject": "aliquam",
            "from": "psanchez2@apache.org",
            "sent_at": "2012-06-25 00:09:55",
            "to": "me@example.com"
            },
        {
            "body": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
            "subject": "augue vel",
            "from": "mshaw3@oakley.com",
            "sent_at": "2011-04-05 07:09:14",
            "to": "me@example.com"
            },

            ];
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

    // mailService.getMail()
    //     .success(function (data, status, headers) {
    //         $scope.email = data.all;
    //     }).error(function (data, status, headers) {

    //     })

$scope.email=mailService.getMail();
console.log($scope.email);
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
