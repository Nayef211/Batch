(function() {
    var config = {
        apiKey: "AIzaSyBrt9LbBh44FUvc8_Ndpj3t36uiHZhwN6o",
        authDomain: "batch-3fd9b.firebaseapp.com",
        databaseURL: "https://batch-3fd9b.firebaseio.com",
        storageBucket: "batch-3fd9b.appspot.com",
        messagingSenderId: "727416862799"
    };
    firebase.initializeApp(config);

    var email = document.getElementById('mail');
    var pass = document.getElementById('pass');
}());

function validateForm() {

    var emailValue = document.getElementById("mail").value;
        passValue = document.getElementById("pass").value;

    if(emailValue == 'Jonathan@hotmail.com' && passValue == 'helloWorld') {
        //alert('Logged in successfully');
        window.location.href = "dashboard.html";
        return false;
    }
    
}



/*
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    
    var errorCode = error.code;
    var errorMessage = error.message;
}); */

/*
function go(){

    var email = document.getElementById("mail").value;
        password = document.getElementById("pass").value;
    
    alert("entered");*/

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        alert("entered firebase");
        var errorCode = error.code;
        var errorMessage = error.message;
    });

//}

firbease.auth().onAuthStateChanged(function(user){
    alert("logged in");
    if(user){
        window.location = "database.html";
        return false;
    } else {

    }
});