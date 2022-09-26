/*Solicita una frase al usuario y contando los espacios que tiene, 
indica de cuántas palabras consta.*/

function contar() {
    let frase = window.prompt("Escribe una frase: ");
    let contador = 1;
    if(frase[0] == ' ') {
        contador--;
    }
    for(let i = 0; i < frase.length; i++) {
        if(frase[i] == ' '){
            do{
                i++;
            }while(frase[i] == ' ')
            if(i != frase.length) {
                contador++;
            }
        }
    }

    alert('La frase tiene ' + contador + ' palabras.')
}