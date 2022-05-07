"use strict";
console.log("holi");
console.log("cacaca");
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
window.onload = function () {
    var audio = new Audio('sonidos/amogus.ogg');
    audio.setAttribute('loop', 'loop');
    audio.play();
};
//no se que pasa weon arreglar
function Funcion() {
    const formData = new FormData(document.querySelector('form'));
    var selections = [];
    var cont = 0;
    for (var pair of formData.entries()) {
        selections[cont] = pair[1];
        cont++;
    }
    var ejercicios = [];
    $.getJSON("./data/ejercicios.json", function (data) {
        $.each(data.ejercicio, function (i, exe) {
            if (selections[0] == exe.diff && selections[1] == exe.area) {
                console.log(selections[0] + " + " + selections[1] + " = " + exe.name);
                $(".result").empty();
                $(".result").append("<p>" + exe.name + "</p>");
                $(".result").append("<img src=\"" + exe.demopath + "\">");
            }
        });
    });
}
