document.addEventListener('DOMContentLoaded',function(event){

    var dataText = [ "With a CSV file, you can upload the data to our servers <br> and our learning algorithm will give you predictions based on computational results!", "Click on the Rocket to display navigation menu.", "LearnerX <br> Backend developed by: Matt Shirvan <br> Frontend developed by: Sean Cuerpo"];
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

var myLink = document.querySelector('.navigation');

myLink.onclick = function setDisplay() {
    var x = document.querySelector(".hide-toggle");
    var y = document.querySelector("div.menu");
    if (x.style.display === "none") {
        x.style.display = "inherit";
        document.querySelector(".main-info").style.display = "inherit";
        y.style.display = "none"
    } else {
        x.style.display = "none";
        document.querySelector(".main-info").style.display = "none";
        y.style.display = "inherit"
    }
}
var stringRandom = (function() {
    var data = {
        isScrolling : false,
        repeat : 0,
        target : [],
        letters : '01',
        originalStrings : '',
        singleLetters : []
    }
    Array.prototype.shuffle = function() {
        var input = this;
        for (var i = input.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex];        
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
    }
    function checkLength(x) {
        return Array.from(document.querySelectorAll(x)).length > 0;
    }
    function addListener(evt, fx) {
        window.addEventListener(evt, fx);    
    }
    function changeLetter(letter) {
        if(letter.textContent != ' ') {
            letter.classList.add('is-changing');
            letter.style.animationDuration = Math.random().toFixed(2) + 's';      
            var newChar = data.letters.substr( Math.random() * data.letters.length, 1);
            letter.textContent = newChar;
            letter.setAttribute('data-txt', newChar);
        }
    }
    function resetLetter(letter, value) {
            letter.classList.remove('is-changing');
            letter.textContent = value;
            letter.setAttribute('data-txt', value);
    }
    function divideLetters() {
        data.target.forEach( (element, index) => {  
            var text = element.textContent;
            var textDivided = '';
            data.originalStrings = text;
            for(var i = 0; i < text.length; i++) {
                textDivided += `<span class="info-scramble slide-one-info-${index}-span-${i}" data-txt="${text.substr(i, 1)}">${text.substr(i, 1)}</span>`;
            }
            element.innerHTML = textDivided;
        }); 
        data.singleLetters = document.querySelectorAll('.info-scramble');
    }
    function changeLetters() {
        if(data.isScrolling) {
            data.singleLetters.forEach(function(el, index){
                changeLetter(el);
            });
        }
        setTimeout(changeLetters, 10);
    }
    function resetLetters() {
        var randomArray = [];  
        for(var i = 0; i < data.singleLetters.length;i++) {
            randomArray.push(i);
        }
        randomArray.shuffle();
        randomArray.forEach(function(el, index){
            setTimeout(function(){
                resetLetter(data.singleLetters[el], data.originalStrings.substring(el, el + 1));
            }, (index * 20 * (Math.random() * 5))).toFixed(2);      
        });
    }
    function updateScrollState() {
        clearTimeout(delay);
        data.isScrolling = true;
        var delay = setTimeout(function() {
            data.isScrolling = false;
            resetLetters();
        }, 100);
    };
    return {
        init: function(selector){
            if(checkLength(selector)) {
                data.target = Array.from(document.querySelectorAll(selector));
                divideLetters();
                changeLetters();
                addListener('scroll', updateScrollState);
            }
        }
    }
})();
var stringRandomTwo = (function() {
    var data = {
        isScrolling : false,
        repeat : 0,
        target : [],
        letters : '01',
        originalStrings : '',
        singleLetters : []
    }
    Array.prototype.shuffle = function() {
        var input = this;
        for (var i = input.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex];        
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
    }
    function checkLength(x) {
        return Array.from(document.querySelectorAll(x)).length > 0;
    }
    function addListener(evt, fx) {
        window.addEventListener(evt, fx);    
    }
    function changeLetter(letter) {
        if(letter.textContent != ' ') {
            letter.classList.add('is-changing');
            letter.style.animationDuration = Math.random().toFixed(2) + 's';      
            var newChar = data.letters.substr( Math.random() * data.letters.length, 1);
            letter.textContent = newChar;
            letter.setAttribute('data-txt', newChar);
        }
    }
    function resetLetter(letter, value) {
            letter.classList.remove('is-changing');
            letter.textContent = value;
            letter.setAttribute('data-txt', value);
    }
    function divideLetters() {
        data.target.forEach( (element, index) => {  
            var text = element.textContent;
            var textDivided = '';
            data.originalStrings = text;
            for(var i = 0; i < text.length; i++) {
                textDivided += `<span class="info-scramble-two slide-two-info-${index}-span-${i}" data-txt="${text.substr(i, 1)}">${text.substr(i, 1)}</span>`;
            }
            element.innerHTML = textDivided;
        }); 
        data.singleLetters = document.querySelectorAll('.info-scramble-two');
    }
    function changeLetters() {
        if(data.isScrolling) {
            data.singleLetters.forEach(function(el, index){
                changeLetter(el);
            });
        }
        setTimeout(changeLetters, 10);
    }
    function resetLetters() {
        var randomArray = [];  
        for(var i = 0; i < data.singleLetters.length;i++) {
            randomArray.push(i);
        }
        randomArray.shuffle();
        randomArray.forEach(function(el, index){
            setTimeout(function(){
                resetLetter(data.singleLetters[el], data.originalStrings.substring(el, el + 1));
            }, (index * 20 * (Math.random() * 5))).toFixed(2);      
        });
    }
    function updateScrollState() {
        clearTimeout(delay);
        data.isScrolling = true;
        var delay = setTimeout(function() {
            data.isScrolling = false;
            resetLetters();
        }, 100);
    };
    return {
        init: function(selector){
            if(checkLength(selector)) {
                data.target = Array.from(document.querySelectorAll(selector));
                divideLetters();
                changeLetters();
                addListener('scroll', updateScrollState);
            }
        }
    }
})();
var stringRandomThree = (function() {
    var data = {
        isScrolling : false,
        repeat : 0,
        target : [],
        letters : '01',
        originalStrings : '',
        singleLetters : []
    }
    Array.prototype.shuffle = function() {
        var input = this;
        for (var i = input.length-1; i >=0; i--) {
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = input[randomIndex];        
            input[randomIndex] = input[i]; 
            input[i] = itemAtIndex;
        }
        return input;
    }
    function checkLength(x) {
        return Array.from(document.querySelectorAll(x)).length > 0;
    }
    function addListener(evt, fx) {
        window.addEventListener(evt, fx);    
    }
    function changeLetter(letter) {
        if(letter.textContent != ' ') {
            letter.classList.add('is-changing');
            letter.style.animationDuration = Math.random().toFixed(2) + 's';      
            var newChar = data.letters.substr( Math.random() * data.letters.length, 1);
            letter.textContent = newChar;
            letter.setAttribute('data-txt', newChar);
        }
    }
    function resetLetter(letter, value) {
            letter.classList.remove('is-changing');
            letter.textContent = value;
            letter.setAttribute('data-txt', value);
    }
    function divideLetters() {
        data.target.forEach( (element, index) => {  
            var text = element.textContent;
            var textDivided = '';
            data.originalStrings = text;
            for(var i = 0; i < text.length; i++) {
                textDivided += `<span class="info-scramble-three slide-three-info-${index}-span-${i}" data-txt="${text.substr(i, 1)}">${text.substr(i, 1)}</span>`;
            }
            element.innerHTML = textDivided;
        }); 
        data.singleLetters = document.querySelectorAll('.info-scramble-three');
    }
    function changeLetters() {
        if(data.isScrolling) {
            data.singleLetters.forEach(function(el, index){
                changeLetter(el);
            });
        }
        setTimeout(changeLetters, 10);
    }
    function resetLetters() {
        var randomArray = [];  
        for(var i = 0; i < data.singleLetters.length;i++) {
            randomArray.push(i);
        }
        randomArray.shuffle();
        randomArray.forEach(function(el, index){
            setTimeout(function(){
                resetLetter(data.singleLetters[el], data.originalStrings.substring(el, el + 1));
            }, (index * 20 * (Math.random() * 5))).toFixed(2);      
        });
    }
    function updateScrollState() {
        clearTimeout(delay);
        data.isScrolling = true;
        var delay = setTimeout(function() {
            data.isScrolling = false;
            resetLetters();
        }, 100);
    };
    return {
        init: function(selector){
            if(checkLength(selector)) {
                data.target = Array.from(document.querySelectorAll(selector));
                divideLetters();
                changeLetters();
                addListener('scroll', updateScrollState);
            }
        }
    }
})();
    stringRandom.init('.slide-one-info');
    stringRandomTwo.init('.slide-two-info');
    stringRandomThree.init('.slide-three-info');

    window.addEventListener('scroll', function(e){
        var scroll = window.pageYOffset;
        const background = document.querySelector('.info-images');
        background.style.top = - (scroll * 1.5) + 'px';
    })

    $(".displayNewToggle").hover(function(){
        $(".url-new").css("display", "inherit");
        }, function(){
        $(".url-new").css("display", "none");
        });
        $(".displayLogoutToggle").hover(function(){
        $(".url-logout").css("display", "inherit");
        }, function(){
        $(".url-logout").css("display", "none");
        });
    

});