const convert =  document.querySelectorAll("li a");
h1 = document.querySelector("h1");
for (x=0;x<convert.length;x++){
    // cambiar la clase del li
    convert[x].addEventListener("mouseover",function(){
        this.style.color = "blue";
        this.style.backgroundColor = "yellow";
        this.style.cursor = "pointer";
    })

    convert[x].addEventListener("mouseout",function(){
        this.style.color = "";
        this.style.backgroundColor = "";
    })
    //console.log(unitC);
    // escuchar por el evento
    convert[x].addEventListener("click",function(evento){
        evento.preventDefault();
        //coger la id de la etiqueta a
        laID =  evento.target.id;
        //console.log(laID);
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
            let mensaje = (num.value +" kilometros es " + convertido+" Millas");
            h1.innerText = mensaje;
        }else if (laID == "MK"){
            let convertido = num.value * 1.60934;
            let mensaje = (num.value +" Millas es " + convertido+" Kilometros");
            h1.innerText = mensaje;
        }else if (laID == "PK"){
            let convertido = num.value * 0.453592;
            let mensaje = (num.value +" es " + convertido+(" Kilogramos"));
            h1.innerText = mensaje;
        }else if(laID == "PL"){
            let convertido = num.value * 0.907194; // num.value/1.1023 factor de conversion obtenido dividiendo 500/453.592
            let mensaje = (num.value+" pounds es " + convertido+(" Libras (500 gr)"));
            h1.innerText = mensaje;
        }
        else if(laID == "FC"){
            let convertido = (num.value -32)/1.8;
            let mensaje = (num.value +" Farenheits es " + convertido+(" Celcius"));
            h1.innerText = mensaje;
        }
        else if(laID == "PC"){
            let convertido = num.value * 2.54; //
            let mensaje = (num.value+" pulgadas es " + convertido+ " centimentros");
            h1.innerText = mensaje;
        }else if(laID == "CP"){
            let convertido = num.value * 0.393701;
            let mensaje = (num.value+" centimetros " + convertido+ " pulgadas");
            h1.innerText = mensaje;
        }else if(laID == "PM"){
            let convertido = num.value * 0.0254;
            let mensaje = (num.value+" pulgadas " + convertido+ " metros");
            h1.innerText = mensaje;
        }else if(laID == "MP"){
            let convertido = num.value * 39.3701;
            let mensaje = (num.value+" metros " + convertido+ " pulgadas");
            h1.innerText = mensaje;
        }else if(laID == "PIM"){
            let convertido = num.value * .3048;
            let mensaje = (num.value+" pies " + convertido+ " metros");
            h1.innerText = mensaje;
        }else if(laID == "MPI"){
            let convertido = num.value * 3.28084;
            let mensaje = (num.value+" metros " + convertido+ " pies");
            h1.innerText = mensaje;
        }else if(laID == "P2M2"){
            let convertido = num.value * 0.092903;
            let mensaje = (num.value+" pies cuadrados " + convertido+ " metros cuadrados");
            h1.innerText = mensaje;
        }else if(laID == "M2P2"){
            let convertido = num.value * 10.7639;
            let mensaje = (num.value+" metros cuadrados " + convertido+ " pies cuadrados");
            h1.innerText = mensaje;
        }
    })
}
