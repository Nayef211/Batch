(function() {
    var email = document.getElementById('mail');
    var pass = document.getElementById('pass');
    var loginB = document.getElementById('login');

    loginB.addEventListener('click', e => {
        const emailVal = email.value();
        const passVal = pass.value();
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(emailVal,passVal);
        promise.catch(e => console.log(e.message));
    })
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