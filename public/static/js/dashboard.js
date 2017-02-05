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
        var mat = rootRef.child(1);
        var cir = rootRef.child(2);        
        $scope.circuits = $firebaseArray(cir);
		$scope.materials = $firebaseArray(mat);

		
		$scope.cirAbout = false;
		$scope.div1 = 0;
		$scope.div2 = 0;

		$scope.matAbout = false;
		$scope.calAbout = false;

		$scope.aboutHeight = 100;

		$scope.addCircuits = function()
		{
			$scope.circuits.push({"Due:": $scope.addCDate,"Name": $scope.addC,"$id":3,"$priority":null});
			$scope.addC = null;
			$scope.addCDate = null;
		}
		$scope.addMaterials = function()
		{
			$scope.materials.push({"Due:": $scope.addMDate,"Name": $scope.addM,"$id":3,"$priority":null});
			$scope.addM = null;
			$scope.addMDate = null;
		}

		$scope.removeCir = function (x) {
	        $scope.circuits.splice(x, 1);
	    }
	    $scope.removeMat = function (x) {
	        $scope.materials.splice(x, 1);
	    }

    });
}());
