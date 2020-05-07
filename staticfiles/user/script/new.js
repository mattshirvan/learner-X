document.addEventListener("DOMContentLoaded", function(){

    var inactiveUsername = document.getElementById('inactiveUsername');
    inactiveUsername.addEventListener('input', resizeInput);
    var inactivePassword = document.getElementById('inactivePassword');
    inactivePassword.addEventListener('input', resizeInput);
    var id_first_name = document.getElementById('id_first_name');
    id_first_name.addEventListener('input', resizeInput);
    var id_last_name = document.getElementById('id_last_name');
    id_last_name.addEventListener('input', resizeInput);
    var id_username = document.getElementById('id_username');
    id_username.addEventListener('input', resizeInput);
    var id_email = document.getElementById('id_email');
    id_email.addEventListener('input', resizeInput);
    var id_password1 = document.getElementById('id_password1');
    id_password1.addEventListener('input', resizeInput);
    var id_password2 = document.getElementById('id_password2');
    id_password2.addEventListener('input', resizeInput);

    function resizeInput() {
        this.style.width = this.value.length + 1 + "ch";
    }

    var dataText = [ "Create an Account to Continue!", "Password must be at least 8 character in length, and contain one number.", "Or you may Login with an existing username!"];
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