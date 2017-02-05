(function() {
    const email = document.getElementById('mail');
    const pass = document.getElementById('pass');
    const loginB = document.getElementById('login');
    const logoutB = document.getElementById('logout');

    loginB.addEventListener('click', e => {
        const emailVal = email.value;
        const passVal = pass.value;
        const auth = firebase.auth();
        console.log("loginB");
        const promise = auth.signInWithEmailAndPassword(emailVal,passVal);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            window.location = './dashboard.html';
        } else {
            console.log("not logged in");
        }
    });

    logoutB.addEventListener('click', e => {
        firebase.auth().signOut();
    });
}());
/*
function validateForm() {

    var emailValue = document.getElementById("mail").value;
        passValue = document.getElementById("pass").value;

    if(emailValue == 'Jonathan@hotmail.com' && passValue == 'helloWorld') {
        //alert('Logged in successfully');
        window.location.href = "dashboard.html";
        return false;
    }
    
}*/