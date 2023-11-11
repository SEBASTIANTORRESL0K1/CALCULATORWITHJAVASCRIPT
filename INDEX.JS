// for (let index = 1; index<6; index++) {
//  if (index==3) {
//     continue;
//  }

//  debugger;
// }
// console.log("Termino el ciclo");

//return los guarda 

// function sumar (a,b,c) {
//     return a+b+c;
// }
// const numero = [5,6,7,8];
// let resultadodefuncion = suma(...numero)

// let saludar = function () {console.log("Hola mundo")};
// saludar();

//function arrowlet hola = function()
// let hola= function(nombre){
//     console.log("Hola"+nombre+"mundo anonima");
// };
// hola("Gael");

// let holaArrow = () => console.log("Hola desde un Arrow");
// holaArrow();

//document.querySelector("#numero1"); SI ES ID HAY QUE USAR #


function suma() {
    let x = parseFloat(document.getElementById("valor1").value);
    let y = parseFloat(document.getElementById("valor2").value);
    let resultado = x + y;
    document.getElementById("display").value = resultado;
    debugger;
}

function resta() {
    let x = parseFloat(document.getElementById("valor1").value);
    let y = parseFloat(document.getElementById("valor2").value);
    let resultado = x - y;
    document.getElementById("display").value = resultado;
    debugger;
}

function multiplicacion() {
    let x = parseFloat(document.getElementById("valor1").value);
    let y = parseFloat(document.getElementById("valor2").value);
    let resultado = x * y;
    document.getElementById("display").value = resultado;
debugger;
}

function dividir() {
    let x = parseFloat(document.getElementById("valor1").value);
    let y = parseFloat(document.getElementById("valor2").value);
    let resultado = x / y;
    document.getElementById("display").value = resultado;
debugger;
}
