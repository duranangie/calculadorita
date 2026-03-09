const input = document.getElementById("alfabetoA");



document.getElementById("btnAlfabeto").addEventListener("click", () => {
    const alfabeto = input.value;
    console.log(alfabeto);
});


function getinnetText() {
    let alfabeto = document.getElementById("resultadoAlfabeto").innerText;
    document.getElementById("resultadoAlfabeto").innerText = alfabeto + input.value;

}