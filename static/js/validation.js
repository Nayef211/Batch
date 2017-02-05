function validateForm() {

    var emailValue = document.getElementById("mail").value;
        passValue = document.getElementById("pass").value;

    if(emailValue == 'Jonathan@hotmail.com' && passValue == 'hello') {
        alert('Logged in successfully');
        window.location.href = "dashboard.html";
        return false;
    }
};