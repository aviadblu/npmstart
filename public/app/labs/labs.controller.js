;
(function () {
	'use strict';
	angular
		.module('codeFreshSiteApp')
		.controller('LabsCtrl', LabsCtrl);

	/* @ngInject */
	function LabsCtrl($scope, $http, CodeSampleService) {
            CodeSampleService.getSampleCollection().success(function(data, status, headers, config) {
                $scope.codeSampleCollection = data;
            });
            
            $scope.randClass = function() {
//                var arr = ['','blue','orange','gray','yellow'];
//                return arr[Math.floor(Math.random() * (arr.length))];
            };

	}

}).call(this);
