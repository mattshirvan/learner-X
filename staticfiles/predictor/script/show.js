document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "By using science, math, and other voodoo the front end <br> designer doesn't understand, a computer is able to predict the outcome <br> based on the input parameters.", "Our AI model has a prediction rate between 80-95% <br> depending on file and sample size!", "LearnerX <br> Backend developed by: Matt Shirvan <br> Frontend developed by: Sean Cuerpo"];
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


    $(".accuracy-toggle").hover(function(){
    $(".accuracy-info").css("display", "inherit");
    }, function(){
    $(".accuracy-info").css("display", "none");
    });
    $(".coefficient-toggle").hover(function(){
    $(".coefficient-info").css("display", "inherit");
    }, function(){
    $(".coefficient-info").css("display", "none");
    });
    $(".intercept-toggle").hover(function(){
    $(".intercept-info").css("display", "inherit");
    }, function(){
    $(".intercept-info").css("display", "none");
    });
});