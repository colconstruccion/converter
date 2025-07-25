convert =  document.querySelectorAll("li a");
h1 = document.querySelector("h1");
for (x=0;x<convert.length;x++){
    //let unitC = convert[x].id;
    //console.log(unitC);
    // escuchar por el evento
    convert[x].addEventListener("click",function(evento){
        evento.preventDefault();
        //coger la id de la etiqueta a
        laID =  evento.target.id;
        console.log(laID);
        let num = document.querySelector("input");
        // si num esta vacion
        //let message = (num.value === "") ? "no hay numero a convertir": "el numero a convertir es "+num.value;
        //console.log(message);
        if (num.value === ""){
            message = "no hay numero a convertir";
            h1.innerText = message;
        }
        //console.log(num.value);
        //console.dir(evento.target.id);
        //coger la id
        else if(laID == "MM"){
            let convertido =  num.value * 0.0006213712;
            let mensaje = (num.value +" es " + convertido+(" millas"));
            h1.innerText = mensaje;
        }
        else if(laID == "CK"){
            let convertido = num.value + 273.16;
            let mensaje = (num.value +" es" + convertido+(" Kelvins"));
            h1.innerText = mensaje;
        }else if(laID == "CF"){
            let convertido = (num.value * 1.8)+32;
            let mensaje = (num.value +" es " + convertido+(" Farenheits"));
            h1.innerText = mensaje;
        }else if (laID == "KM"){
            let convertido = num.value * 0.6213711922;
            let mensaje = (num.value +" es " + convertido+(" Kilometros"));
            h1.innerText = mensaje;
        }else if (laID == "PK"){
            let convertido = num.value * 0.453592;
            let mensaje = (num.value +" es " + convertido+(" Kilogramos"));
            h1.innerText = mensaje;
        }
        else if(laID == "PL"){
            let convertido = num.value / 1.1023; //factor de conversion obtenido dividiendo 500/453.592
            let mensaje = (num.value+" pounds es " + convertido+(" Libras (500 gr)"));
            h1.innerText = mensaje;
        }else if(laID == "FC"){
            let convertido = num.value - 32;
            convertido = convertido/1.8; 
            let mensaje = (num.value+" farenheit es " + convertido+ " celsius");
            h1.innerText = mensaje;
        }
    })
}
