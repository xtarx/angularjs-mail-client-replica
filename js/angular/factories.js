(function () {
	'use strict';

    var app = angular.module('dateCounter');
	var	apiurl='http://localhost/NgageU/FlightTrackerSMS/api/';
	app.factory('apiService', function ($resource) {		

	return $resource(apiurl+":action/:From/:To", {}, {
		getMessages: { method:"GET", params: { action:"get_messages" },From: "@From",To: "@To", isArray: true },		
		getLineChart: { method:"GET", params: { action:"get_line_chart" },From: "@From",To: "@To", isArray: true },		
	

	});
	

	});

})();
