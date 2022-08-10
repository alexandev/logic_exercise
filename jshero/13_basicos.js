/* 
Dado un array de strings existe la palabra clave "myKey" y debes retornar la posición dentro del array en donde se encuentra este string y si no está debes retornan un false.

La solución debería tener un input y output como los siguientes:

solution(["diamonds", "myKey", "spades", "AS"]);
solution(["diamonds", "hearts", "spades"]);
solution(["myKey", "hearts", "spades"]);

Output:
1
false
0
*/


/**************************************************** */
function solution(words) {
  return words.indexOf('myKey') === -1 ? false : words.indexOf('myKey');
}

let res1 = solution(["diamonds", "myKey", "spades", "AS"]);
let res2 = solution(["diamonds", "hearts", "spades"]);
let res3 = solution(["myKey", "hearts", "spades"]);

console.log(res1, res2 , res3)