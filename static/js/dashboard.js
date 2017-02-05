var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.circuits = ["Chapter 13 Problem Set", "Memes"];
	$scope.materials = ["Study Midterms", "Tutorial Questions"];
	$scope.calculus = ["PSet 4"];
	$scope.cirAbout = false;
	$scope.matAbout = false;
	$scope.calAbout = false;

	$scope.addCircuits = function()
	{
		$scope.circuits.push($scope.addC);
		$scope.addC = null;
	}
	$scope.addMaterials = function()
	{
		$scope.materials.push($scope.addM);
		$scope.addM = null;
	}
	$scope.addCalculus = function()
	{
		$scope.calculus.push($scope.addCal);
		$scope.addCal = null;
	}

});