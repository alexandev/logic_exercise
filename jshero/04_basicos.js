/* 
Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

La solución debería tener un input y output como los siguientes:

solution(['amor', 'sol', 'piedra', 'día']);

Output

[ 'amor', 'piedra' ] 
*/


/***********************************************/


function solution(array){

    return array.filter( palabra => palabra.length >= 4 );

}

let res = solution(['amor', 'sol', 'piedra', 'día']);

console.log( res );