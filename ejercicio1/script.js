/*Solicita al usuario que elija entre la opción 1 o 2:
1. Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, 
   uno de ellos o ninguno.
2. Se le debe pedir una palabra y comprobar si empieza o termina por a */

function solicitar() {
    let opcion = parseInt(window.prompt("Inserta una opcion (1/2): "));
    switch(opcion) {
        case 1:
            numeros();
            break;
        case 2:
            palabra();
            break;
        default:
            alert("No has escrito 1 o 2, vuelve a intentarlo.");
            break;
    }
}

/*Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, 
   uno de ellos o ninguno.*/
function numeros() {
    let sonNumeros;
    let n1;
    let n2;
    let resultado = '';
    do{
        n1 = parseInt(window.prompt("Inserta un numero: "));
        n2 = parseInt(window.prompt("Inserta otro numero: "));
        sonNumeros = !isNaN(n1) && !isNaN(n2);
        if(!sonNumeros) {
            alert("No has escrito dos numeros, vuelve a intentarlo.");
        }
    }while(!sonNumeros)
    
    let numeros = [n1,n2];

    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 == 0) {
            resultado += numeros[i] + " es un numero par.\n"
        } else {
            resultado += numeros[i] + " no es un numero par.\n"
        }
        if(numeros[i] % 25 == 0) {
            resultado += numeros[i] + " es multiplo de 25.\n"
        } else {
            resultado += numeros[i] + " no es multiplo de 25.\n"
        }
    }
    alert(resultado);
}

/* Se le debe pedir una palabra y comprobar si empieza o termina por a */
function palabra() {
    let palabra = window.prompt("Escribe una palabra: ");
    if(palabra[0] == 'a' && palabra[palabra.length - 1] == 'a') {
        alert('La palabra ' + palabra + ' empieza y termina por a.');
    } else if(palabra[0] == 'a') {
        alert('La palabra ' + palabra + ' empieza por a.');
    } else if(palabra[palabra.length - 1] == 'a') {
        alert('La palabra ' + palabra + ' termina en a.')
    } else {
        alert('La palabra ' + palabra + ' no empieza ni termina por a.');
    }
}

