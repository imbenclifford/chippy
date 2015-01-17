'use strict';

/**
 * @ngdoc function
 * @name calcApp.controller:CalcCtrl
 * @description
 * # CalcCtrl
 * Controller of the calcApp
 */
angular.module('calcApp')
  .controller('CalcCtrl', function ($scope) {
    $scope.options = [
    { label: 'year', value: 1 },
    { label: 'month', value: 12 },
    { label: 'week', value: 52 }
  ];
    
  $scope.selected = $scope.options[0];

  $scope.percentage = 10;
  $scope.earnings = 10000;

  $scope.perday = function(){
  	return $scope.earnings/100 * $scope.percentage * $scope.selected.value/365;
  };

  $scope.chipamount = function(){
  	var num = $scope.earnings/100 * $scope.percentage/3 * $scope.selected.value/365;
  	return Math.round(num * 100) / 100;
	};

	$scope.chip = $scope.chipamount();
	$scope.list = [];
	$scope.submit = function() {
	    if ($scope.chip && $scope.email) {
	      $scope.list.push(this.chip + ', ' + this.email);
	      $scope.chip = '';
	    }
	};

	$scope.email = 'alvin@thechipmunks.com';
});