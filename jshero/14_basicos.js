/* 
En este desafío vas a recibir un array de string y debes retornar un string en donde cada elemento del array esté separado por comas.

La solución debería tener un input y output como los siguientes:

solution(["amor", "sol", "piedra", "día"]);
solution(["diamonds", "hearts", "spades"]);
*/


function solution(words) {
  return words.join();
}; 


let res1 = solution(["amor", "sol", "piedra", "día"]);
let res2 = solution(["diamonds", "hearts", "spades"]);

console.log(res1, res2);