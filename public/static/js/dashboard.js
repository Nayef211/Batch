(function() {
  // Initialize Firebase


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrt9LbBh44FUvc8_Ndpj3t36uiHZhwN6o",
    authDomain: "batch-3fd9b.firebaseapp.com",
    databaseURL: "https://batch-3fd9b.firebaseio.com",
    storageBucket: "batch-3fd9b.appspot.com",
    messagingSenderId: "727416862799"
  };
  firebase.initializeApp(config);


angular
    .module('myApp', ['firebase',])
    .controller('MyCtrl', function($scope, $firebaseArray){
        var rootRef = firebase.database().ref().child('tasks');
        var cal = rootRef.child(0);
        $scope.calculus= $firebaseArray(cal);

        $scope.circuits = ["Chapter 13 Problem Set", "Memes"];
		$scope.materials = ["Study Midterms", "Tutorial Questions"];

		
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
}());
