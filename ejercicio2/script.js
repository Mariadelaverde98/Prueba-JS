/*Solicita una frase al usuario y contando los espacios que tiene, 
indica de cuántas palabras consta (debes presuponer que la frase tiene
un único espacio entre palabras).*/

function contar() {
    let frase = window.prompt("Escribe una frase: ");
    let contador = 1;
    for(let i = 0; i < frase.length; i++) {
        if(frase[i] == ' '){
            contador++;
        }
    }
    alert('La frase tiene ' + contador + ' palabras.')
}