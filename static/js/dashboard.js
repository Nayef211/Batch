var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.circuits = ["Chapter 13 Problem Set", "Memes"];
	$scope.materials = ["Study Midterms", "Tutorial Questions"];
	$scope.calculus = ["PSet 4"];

	$scope.addCircuits = function()
	{
		$scope.circuits.push($scope.addC);
	}
	$scope.addMaterials = function()
	{
		$scope.materials.push($scope.addM);
	}
	$scope.addCalculus = function()
	{
		$scope.calculus.push($scope.addCal);
	}
});