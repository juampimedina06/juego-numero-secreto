let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //con el parseInt se pasa el tipo de dato a number
    if(numeroDeUsuario === numeroSecreto){//aca nos va a dar un true o false
        asignarTextoElemento('p',`felicidades acertasate el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');

        }
        intentos++;
        limpiarCaja(); //limpiar caja
    }
    return;

}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //genera un numero random del 1 la 10
   //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sorteaton todos los numero posibles');
    }else{
    //Si  el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) { //includes nos dice si ya esta en ese array
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //desabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    //inicializar el numero de intentos
}

condicionesIniciales();








