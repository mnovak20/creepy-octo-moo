'use strict';

/**
 * @ngdoc function
 * @name videoUploadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoUploadApp
 */
angular.module('voterApp')
  .controller('MainCtrl', function ($scope) {

  	var male = 0,
  	    female = 0,
  	    voters = 0;
  	$scope.malePercentage = 0;
  	$scope.femalePercentage = 0;
  	$scope.more = null;

  	// fn called when clicking on vote button
  	$scope.vote = function(gender){
  		
  		// increment voters first 
  		voters++;

  		// increment gender
  		if(gender === 'Female'){
  			female++;
  		} else {
  			male++;
  		}

  		// calculate percentages and figure out which gender has the higher percentage
  		$scope.femalePercentage = Math.round((female / voters) *100);
  		$scope.malePercentage = 100 - $scope.femalePercentage;
  		$scope.more = $scope.femalePercentage > $scope.malePercentage ? 'Female' : 'Male';


  		// set the more variable that gets used as a flag for ng-class
  		if($scope.femalePercentage > $scope.malePercentage){
  			$scope.more = 'Female';
  		} else if($scope.femalePercentage < $scope.malePercentage){
  			$scope.more = 'Male';
  		} else{
  			$scope.more = null;
  		}
  	}

  });
