//numeros primos 1 - 100

// const generarPrimos= (limite) => {
//     let contador = 1;
//     const nPrimos = [];

//     while (contador <= limite){
//         let n=1;
//         let contadorDivisibles = 0

//         while(n <= contador && contadorDivisibles <=2){
//             if( contador % n === 0 ){
//                 contadorDivisibles++
//             }
//             n++;
//         }
//         contadorDivisibles < 3 ? nPrimos.push(contador) : null; 

//         contador++;
//     }

//     console.log(nPrimos)
// }


const generarPrimos2 = (limite) => {
    let j=2;
    const nPrimos = [];

    const isPrimo = (num) => {
        for(let i = 2; i < num; i++){
            if(num % i === 0) return false;
        }
        return num !== 1; 
    }

    for(;j<limite; j++){
        isPrimo(j) ? nPrimos.push(j) : null;
    }
    console.log(nPrimos)
} 

// generarPrimos(5);
generarPrimos2(100);
