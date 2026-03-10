const cadenaA = document.getElementById("cadena1");
const cadenaB = document.getElementById("cadena2");
const operacionCadena = document.getElementById("operacionCadena");
const resultadoCadena = document.getElementById("resultadoCadena");



document.getElementById("btnCadena").addEventListener("click", () => {

  //longitud
  const longitudA = cadenaA.value.length;
  const longitudB = cadenaB.value.length;
  console.log("Longitud de A:", longitudA);
  console.log("Longitud de B:", longitudB);

    //Concatenacion
    const concatenacion = cadenaA.value + cadenaB.value;
    console.log(concatenacion);

    

    //potencia
    const potenciaA = cadenaA.value.repeat(parseInt(cadenaB.value));
    console.log("Potencia de A:", potenciaA);

    //reverse
    const reverse = cadenaA.value.split("").reverse().join("");
    console.log("Reverse de A:", reverse);



  if (operacionCadena.value === "Longitud") {
    resultadoCadena.innerText = longitudA + " y " + longitudB;
  }else if(operacionCadena.value === "Concatenacion") {
    resultadoCadena.innerText = concatenacion;

  }else if(operacionCadena.value === "Potencia") {
    resultadoCadena.innerText = potenciaA;
  
  }else if(operacionCadena.value === "Inversa") {
    resultadoCadena.innerText = reverse;
  }



    

});