/* 
En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos.

La solución debería tener un input y output como los siguientes:

Input

solution([1, 2, 3], [4, 5, 6]);
solution(["A", "B", "C"], ["D", "E", "H"]);

Output

[1, 2, 3, 4, 5 , 6]
["A", "B", "C", "D", "E", "H"]
*/


function solution(arrayA, arrayB) {
  // return arrayA.concat(arrayB);
  return [...arrayA,...arrayB];
}; 


let res1 = solution([1, 2, 3], [4, 5, 6]);
let res2 = solution(["A", "B", "C"], ["D", "E", "H"]);


console.log(res1);
console.log(res2);

