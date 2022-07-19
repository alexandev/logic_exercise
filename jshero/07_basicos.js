/* 
Tu desafío es crear un buscador usando funciones como filter y includes, vas a tener array con palabras e tienes que retornar un array con sola las que cumplan con la condición de tener el parámetro de búsqueda.

La solución debería tener un input y output como los siguientes:

solution(["ana", "santi", "nico", "anastasia"], "an");
solution(["ana", "santi", "nico", "anastasia"], "xyz");

Output

["ana", "santi", "anastasia"]
[]
*/

function solution (words, query){
    return words.filter( word => word.toLowerCase().includes(query));
}

res1 = solution(["ana", "santi", "nico", "anastasia"], "an");
res2 = solution(["ana", "santi", "nico", "anastasia"], "xyz");
res3 = solution(["ana", "santi", "nico", "anastasia"], "i");

console.log(res1);
console.log(res2);
console.log(res3);

