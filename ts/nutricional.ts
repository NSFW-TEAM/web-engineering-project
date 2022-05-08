function CalcIMC() {

    const formData = new FormData(document.querySelector('form'));
    var selections:string[] =[];
    var cont = 0;
    for (var pair of formData.entries()) {
        selections[cont] = pair[1] as string;
        console.log(pair[1]);
        cont++;
    }
    let peso:number = parseInt(selections[0]);
    let altura:number = parseInt(selections[1])/100;
    let aux:number = peso/(altura*altura);
    var imc = Math.round(aux * 10) / 10
    var premsg:string = "<p>Tu IMC es de "+imc+", por lo tanto, ";
    if(imc<18.5){
        $(".resultado").append(premsg+"te encuentras bajo tu peso ideal...</p>");
    }
    if(imc>=18.5 && imc<25){
        $(".resultado").append(premsg+"te encuentras en tu peso ideal. ¡Hurra!</p>");
    }
    if(imc>=25 && imc<30){
        $(".resultado").append(premsg+"te encuentras sobre tu peso ideal...</p>");
    }
    if(imc>=30 && imc<35){
        $(".resultado").append(premsg+"te encuentras en Obesidad I...</p>");
    }
    if(imc>=35 && imc<40){
        $(".resultado").append(premsg+"te encuentras en Obesidad II...</p>");
    }
    if(imc>=40 && imc<50){
        $(".resultado").append(premsg+"te encuentras en Obesidad III...</p>");
    }
    if(imc>=50){
        $(".resultado").append(premsg+"te encuentras en Obesidad IV...</p>");
    }
}