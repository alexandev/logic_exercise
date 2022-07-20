/* 
En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.

La solución debería tener un input y output como los siguientes:

solution([1, 3, 5, 7, 10, 11]);
solution([1, 3, 5]);

Output

true
false
*/


/***********************************************/


function solution(numbers){
  return numbers.some( (number) => number%2 === 0 );
}

res = solution([1, 3, 5, 7, 10, 11]);
res2 = solution([1, 3, 5]);

console.log(res, res2);