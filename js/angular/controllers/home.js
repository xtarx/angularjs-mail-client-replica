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
            
            {
                "body": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
                "subject": "eu mi",
                "from": "dhill1j@cisco.com",
                "sent_at": "2013-04-16 17:19:41",
                "to": "me@example.com"
            },
            {
                "body": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
                "subject": "curae mauris viverra diam vitae",
                "from": "drivera1k@4shared.com",
                "sent_at": "2013-10-23 16:06:44",
                "to": "me@example.com"
            },
            {
                "body": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
                "subject": "sapien non",
                "from": "emorgan1l@google.com",
                "sent_at": "2014-03-21 21:35:57",
                "to": "me@example.com"
            },
            {
                "body": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
                "subject": "in lectus pellentesque at nulla",
                "from": "jcox1m@reverbnation.com",
                "sent_at": "2013-08-29 14:30:05",
                "to": "me@example.com"
            },
            {
                "body": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
                "subject": "diam vitae quam suspendisse",
                "from": "cmendoza1n@upenn.edu",
                "sent_at": "2015-01-20 20:57:31",
                "to": "me@example.com"
            },
            {
                "body": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
                "subject": "condimentum neque sapien placerat",
                "from": "rflores1o@theglobeandmail.com",
                "sent_at": "2015-04-04 23:22:23",
                "to": "me@example.com"
            },
            {
                "body": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
                "subject": "quis orci",
                "from": "smedina1p@geocities.com",
                "sent_at": "2015-02-22 02:23:44",
                "to": "me@example.com"
            },
            {
                "body": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
                "subject": "quam pede lobortis ligula",
                "from": "cbrown1q@chron.com",
                "sent_at": "2015-01-13 17:50:07",
                "to": "me@example.com"
            },
            {
                "body": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
                "subject": "lobortis est phasellus",
                "from": "mrodriguez1r@arstechnica.com",
                "sent_at": "2012-09-30 03:24:29",
                "to": "me@example.com"
            },
            {
                "body": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
                "subject": "vivamus vel",
                "from": "fromero1s@dropbox.com",
                "sent_at": "2014-04-12 11:55:43",
                "to": "me@example.com"
            },
            {
                "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
                "subject": "rutrum",
                "from": "tsanders1t@princeton.edu",
                "sent_at": "2010-11-28 04:29:18",
                "to": "me@example.com"
            },
            {
                "body": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
                "subject": "ut volutpat",
                "from": "trobinson1u@fastcompany.com",
                "sent_at": "2012-02-03 09:56:13",
                "to": "me@example.com"
            },
            {
                "body": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
                "subject": "turpis a",
                "from": "cperry1v@discovery.com",
                "sent_at": "2013-08-26 09:28:35",
                "to": "me@example.com"
            },
            {
                "body": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
                "subject": "porttitor lacus",
                "from": "hbanks1w@theglobeandmail.com",
                "sent_at": "2013-11-05 06:49:49",
                "to": "me@example.com"
            },
            {
                "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
                "subject": "pharetra magna ac consequat metus",
                "from": "ajordan1x@hao123.com",
                "sent_at": "2014-07-20 16:14:38",
                "to": "me@example.com"
            },
            {
                "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
                "subject": "turpis nec",
                "from": "rbradley1y@sciencedirect.com",
                "sent_at": "2012-07-23 16:36:18",
                "to": "me@example.com"
            },
            {
                "body": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
                "subject": "non velit nec nisi vulputate",
                "from": "jdean1z@twitter.com",
                "sent_at": "2012-07-12 12:26:54",
                "to": "me@example.com"
            },
            {
                "body": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
                "subject": "id nisl",
                "from": "bwhite20@answers.com",
                "sent_at": "2012-04-28 10:28:22",
                "to": "me@example.com"
            },
            {
                "body": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
                "subject": "lacus purus aliquet at feugiat",
                "from": "sgibson21@drupal.org",
                "sent_at": "2012-01-11 10:37:22",
                "to": "me@example.com"
            },
            {
                "body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
                "subject": "eget",
                "from": "pfreeman22@va.gov",
                "sent_at": "2012-05-20 05:14:07",
                "to": "me@example.com"
            },
            {
                "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
                "subject": "elit",
                "from": "lmoreno23@pbs.org",
                "sent_at": "2014-04-26 15:57:42",
                "to": "me@example.com"
            },
            {
                "body": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
                "subject": "adipiscing lorem vitae mattis nibh",
                "from": "ebanks24@wiley.com",
                "sent_at": "2013-09-11 04:18:58",
                "to": "me@example.com"
            },
            {
                "body": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
                "subject": "ut erat id mauris",
                "from": "abanks25@pcworld.com",
                "sent_at": "2011-04-06 09:34:57",
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

    $scope.email = mailService.getMail();
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
