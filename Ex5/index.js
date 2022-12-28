// Exiba um prompt solicitando a entrada de um número para saber quantos pares e impares existem de 0 até o número digitado.
// Calcule o número de pares e impares e exiba o resultado utilizando um alert.


var numero = parseInt(prompt('Digite um número: '));

if (isNaN(numero)){
    alert('Número inválido');
} else{
    var par = 0;
    var impar = 0;
    for ( var i = 0; i <= numero; i++ ) {
        if (i % 2 == 0 ){
            par += 1;
        } else {
            impar += 1;
        }   
    }
    alert('Existem ' + par + ' números pares e ' + impar + ' números ímpares ' )
}