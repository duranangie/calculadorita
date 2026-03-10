const lenguajeA = document.getElementById("lenguaje1");
const lenguajeB = document.getElementById("lenguaje2");
const operacionLenguaje = document.getElementById("operacionLenguaje");
const resultadoLenguaje = document.getElementById("resultadoLenguaje");


document.getElementById("btnLenguaje").addEventListener("click", () => {
 
    const lenguajeAValue = lenguajeA.value.split(",");
    const lenguajeBValue = lenguajeB.value.split(",");

    //concatenacion
    const concatenacion = [];
    for (let i = 0; i < lenguajeAValue.length; i++) {
        for (let j = 0; j < lenguajeBValue.length; j++) {
            concatenacion.push(lenguajeAValue[i] + lenguajeBValue[j]);
        }
    }
    
    //console.log("Concatenación:", concatenacion);


    //potenciacion

    const potenciaA = new Set([...lenguajeAValue]);
    let res = new Set(potenciaA);
    const n = parseInt(lenguajeB.value);

    for (let i = 1; i < n; i++) {
        const nuevaPotencia = new Set();
        for(const elementoA of res){
            for(const elementoB of potenciaA){
                nuevaPotencia.add(elementoA + elementoB);

            }
            
        }
        res = nuevaPotencia;
    }
    console.log("Potencia de A:", Array.from(res));


    // reverse 
    const reverse = lenguajeAValue.map(num => Number(num.toString().split("").reverse().join("")));
    console.log("Reverse de A:", reverse);

    //union
   const setUnion = new Set([...lenguajeAValue, ...lenguajeBValue]);
   const unionResult = Array.from(setUnion);
   console.log("Unión:", unionResult);

       //interseccion 
    const interseccion = new Set(lenguajeAValue.filter(elemento => lenguajeBValue.includes(elemento)))
    const nuevoSet = Array.from(interseccion);
    console.log("Intersección:", nuevoSet);

       //resta 

    const diferencia = new Set([...lenguajeAValue].filter(x => !lenguajeBValue.includes(x)));
    const diferenciaResult = Array.from(diferencia);
    console.log("resta:", diferenciaResult);

    //clausura de kleene
    const kleene = new Set([""])
    let actual = [...lenguajeAValue];

    const m = parseInt(lenguajeB.value);

    for(let i = 1; i <= m; i++){
        actual.forEach(x => kleene.add(x));
        let siguiente = []
        actual.forEach(x => {
            lenguajeAValue.forEach(y => {
                siguiente.push(x+y);
            })
        })
        actual = siguiente;
    }
    const kleeneResult = Array.from(kleene);
    console.log("Cerradura de Kleene:", kleeneResult);

    //clausura positiva
    const clausuraPositiva = new Set();
    let actualPositiva = [...lenguajeAValue];

    for(let i = 1; i <= m; i++){
        actualPositiva.forEach(x => clausuraPositiva.add(x));
        let siguientePositiva = []
        actualPositiva.forEach(x => {
            lenguajeAValue.forEach(y => {
                siguientePositiva.push(x+y);
            })
        })
        actualPositiva = siguientePositiva;
    }
    const clausuraPositivaResult = Array.from(clausuraPositiva);
    console.log("Cerradura Positiva:", clausuraPositivaResult);


    if (operacionLenguaje.value === "Concatenacion") {
        resultadoLenguaje.innerText = concatenacion.join(", ");
    }
    else if (operacionLenguaje.value === "Potenciacion") {
        resultadoLenguaje.innerText = Array.from(res).join(", ");
    }

    else if (operacionLenguaje.value === "Inversa") {
        resultadoLenguaje.innerText = reverse.join(", ");
    }else if (operacionLenguaje.value === "Union") {
        resultadoLenguaje.innerText = unionResult.join(", ");
    }else if (operacionLenguaje.value === "Interseccion") {
        resultadoLenguaje.innerText = nuevoSet.join(", ");
    }else if (operacionLenguaje.value === "Resta") {
        resultadoLenguaje.innerText = diferenciaResult.join(", ");
    }else if (operacionLenguaje.value === "Clausura de Kleene") {
        resultadoLenguaje.innerText = kleeneResult.join(", ");
    }else if (operacionLenguaje.value === "Clausura positiva") {
        resultadoLenguaje.innerText = clausuraPositivaResult.join(", ");
    }
});




