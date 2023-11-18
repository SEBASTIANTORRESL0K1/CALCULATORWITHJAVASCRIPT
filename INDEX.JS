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


// eventos del mouse
// click.addEventListener("click",function () {}=EventCounts, funcion



// Eventos del mouse
               // evento | función
               let hacerclick = document.querySelector(".botonClick");
               hacerclick.addEventListener('click',function(){
                console.log('Dimos click en el botón')
                hacerclick.classList.toggle("botony");
             })
             
             hacerclick.addEventListener('mouseout',function(){
                console.log('Salí del botón')
             
             })

             hacerclick.addEventListener('mouseover',function(){
                console.log('Entre al botón')
             
             })
             
             
             //eventos del teclado
             window.addEventListener('keydown',(e)=>{
                console.log('pulso una tecla')
                console.log(String.fromCharCode(e.keyCode))
             })
             
             window.addEventListener('keypress',()=>{
                console.log('presione una tecla')
             })
             window.addEventListener('keyup',()=>{
                console.log('dejé de presionar una tecla')
             })
             
             window.addEventListener('load',() => {
                console.log('Terminé de cargar la página')
             })
             
             
             function escribir(){
                let text = document.getElementById("texto").textContent;
                let texto = document.getElementById("Escribir").textContent;
             
                
             }