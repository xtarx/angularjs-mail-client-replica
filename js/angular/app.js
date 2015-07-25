'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {


    $routeProvider.when('/', {
            templateUrl: "js/angular/templates/home.html",
            controller: 'HomeController'
        })
        .when('/settings', {
            templateUrl: "js/angular/templates/settings.html",
            controller: 'SettingsController'
        })

    .otherwise({
        redirectTo: '/'
    });
    //    $locationProvider.html5Mode(true);
});
