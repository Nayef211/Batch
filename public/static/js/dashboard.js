var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	$scope.circuits = ["Chapter 13 Problem Set", "Memes"];
	$scope.materials = ["Study Midterms", "Tutorial Questions"];
	$scope.calculus = ["PSet 4"];
	
	$scope.cirAbout = false;
	$scope.div1 = 0;
	$scope.div2 = 0;


	$scope.matAbout = false;
	$scope.calAbout = false;

	$scope.aboutHeight = 100;

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

	$scope.removeCir = function (x) {
        $scope.circuits.splice(x, 1);
    }
    $scope.removeMat = function (x) {
        $scope.materials.splice(x, 1);
    }
    $scope.removeCal = function (x) {
        $scope.calculus.splice(x, 1);
    }

});
