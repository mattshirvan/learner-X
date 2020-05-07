document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "With machine learning, you can ask a computer <br> to predict certain models for you!", "First, select a CSV file, fill out the necessary paramaters <br> for the algorithm to identify, and click Predict!", "LearnerX <br> Backend developed by: Matt Shirvan <br> Frontend developed by: Sean Cuerpo"];
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
    // start the text animation
    StartTextAnimation(0);

    var filename = document.getElementById('id_name');
    filename.addEventListener('input', resizeInput);
    var size = document.getElementById('id_size');
    size.addEventListener('input', resizeInput);
    var firstParameter = document.getElementById('id_first');
    firstParameter.addEventListener('input', resizeInput);
    var secondParameter = document.getElementById('id_second');
    secondParameter.addEventListener('input', resizeInput);
    var thirdParameter = document.getElementById('id_third');
    thirdParameter.addEventListener('input', resizeInput);

    function resizeInput() {
        this.style.width = this.value.length + 1 + "ch";
        if (this.value.length == 0) {
            this.style.width = 8 + 'ch';
        }
    }
});
