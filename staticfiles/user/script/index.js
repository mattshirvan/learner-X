document.addEventListener("DOMContentLoaded", function(){
    
    var username = document.getElementById('id_username');
    username.addEventListener('input', resizeInput);
    var password = document.getElementById('id_password1');
    password.addEventListener('input', resizeInput);
    var inactiveFirstName = document.getElementById('inactiveFirstName');
    inactiveFirstName.addEventListener('input', resizeInput);
    var inactiveLastName = document.getElementById('inactiveLastName');
    inactiveLastName.addEventListener('input', resizeInput);
    var inactiveUsername = document.getElementById('inactiveUsername');
    inactiveUsername.addEventListener('input', resizeInput);
    var inactivePassword = document.getElementById('inactivePassword');
    inactivePassword.addEventListener('input', resizeInput);
    var inactivePassword2 = document.getElementById('inactivePassword2');
    inactivePassword2.addEventListener('input', resizeInput);

    function resizeInput() {
        this.style.width = this.value.length + 1 + "ch";
        if (this.value.length == 0) {
            this.style.width = 8 + "ch";
        }
    }

    var dataText = [ "Welcome to LearnerX!", "A simple machine learning application.", "Login or Create an Account to continue!"];
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
        document.querySelector(".message2user").innerHTML = text.substring(0, i+1) +'<span class="caret" aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
        }
        else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 10000);
        }
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
            StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function(){
        StartTextAnimation(i + 1);
        });
        }
    }
    StartTextAnimation(0);
});