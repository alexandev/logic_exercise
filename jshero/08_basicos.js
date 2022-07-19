/* 
Tienes un array de números y debes retornar la suma de todos los valores en él.

La solución debería tener un input y output como los siguientes:

solution([1, 1, 1]);
solution([2, 4, 8]);

Output

3
14
 */

const solution = (array) => array.reduce( 
    (previousValue, currentValue) => previousValue + currentValue 
);

// function solution(array) {
//     return array.reduce( 
//         (previousValue, currentValue) => previousValue + currentValue 
//     );
// }

let res = solution([1, 1, 1]);
let res2 = solution([2, 4, 8]);

console.table(res, res2);
