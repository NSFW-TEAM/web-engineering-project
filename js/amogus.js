function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
}

window.onload = function() {
    var audio = new Audio('sonidos/amogus.ogg');
    for(var i=0;i<5;i++){
        setTimeout(() => { audio.play();},randomNumber(1,5)*200);
    }
}