const alfabetoA = document.getElementById("alfabetoA");
const alfabetoB = document.getElementById("alfabetoB");
const operacionAlfabeto = document.getElementById("operacionAlfabeto");
const resultadoAlfabeto = document.getElementById("resultadoAlfabeto");


document.getElementById("btnAlfabeto").addEventListener("click", () =>   {
   const alfabetoAValue = alfabetoA.value.split(",");
   const alfabetoBValue = alfabetoB.value.split(",");
   
   //union
   const setUnion = new Set([...alfabetoAValue, ...alfabetoBValue]);
   const unionResult = Array.from(setUnion);
   console.log("Unión:", unionResult);
   
   //subconjuto
   const esSubconjunto = [...alfabetoAValue].every(elemento =>
   alfabetoBValue.includes(elemento));
   const mensaje = esSubconjunto
   ? "Sí, A es subconjunto de B"
   : "No, A no es subconjunto de B";
   console.log(mensaje);

   //pertenencia
    const pertenencia = new Set([...alfabetoAValue]);
    const elemento = alfabetoBValue[0];
    const esPertenencia = pertenencia.has(elemento);
    console.log(`¿${elemento} pertenece a A?`, esPertenencia);

    //interseccion 
    const interseccion = new Set(alfabetoAValue.filter(elemento => alfabetoBValue.includes(elemento)))
    const nuevoSet = Array.from(interseccion);
    console.log("Intersección:", nuevoSet);


    //complemento

    const complemento = new Set([...alfabetoAValue].filter(x => !alfabetoBValue.includes(x)));
    const complementoResult = Array.from(complemento);
    console.log("Complemento:", complementoResult);

    //diferencia 

    const diferencia = new Set([...alfabetoAValue].filter(x => !alfabetoBValue.includes(x)));
    const diferenciaResult = Array.from(diferencia);
    console.log("Diferencia:", diferenciaResult);

   // diferencia simetrica

    const diferenciaSimetrica = new Set([...alfabetoAValue, ...alfabetoBValue].filter(x => !alfabetoAValue.includes(x) || !alfabetoBValue.includes(x)));
    const diferenciaSimetricaResult = Array.from(diferenciaSimetrica);
    console.log("Diferencia Simétrica:", diferenciaSimetricaResult);


   if (operacionAlfabeto.value === "Union") {
       resultadoAlfabeto.innerText = unionResult.join(", ");

   }else if (operacionAlfabeto.value === "Subconjunto") {
       resultadoAlfabeto.innerText = mensaje;

    }else if (operacionAlfabeto.value === "Pertenencia") {
       resultadoAlfabeto.innerText = elemento + (esPertenencia ? " pertenece a A" : " no pertenece a A");


    }else if (operacionAlfabeto.value === "Interseccion") {
       resultadoAlfabeto.innerText = nuevoSet.join(", ");


    }else if (operacionAlfabeto.value === "Complemento") {
       resultadoAlfabeto.innerText = complementoResult.join(", ");
    }else if (operacionAlfabeto.value === "Diferencia") {
       resultadoAlfabeto.innerText = diferenciaResult.join(", ");

    }else if (operacionAlfabeto.value === "Diferencia simetrica") {
       resultadoAlfabeto.innerText = diferenciaSimetricaResult.join(", ");

   }else {
       window.alert("La operación seleccionada no se ha implementado aún.");
}  });