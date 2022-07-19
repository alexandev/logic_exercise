//fibonacci
const generarFibonacci = (limite)=> {
    const arrayFibo = [0,1];
    
    while(arrayFibo.length < limite){
        let newValue = arrayFibo[arrayFibo.length-1] + arrayFibo[arrayFibo.length-2];
        arrayFibo.push(newValue);
    }

    console.log(arrayFibo);
    console.log(arrayFibo.length);
}

generarFibonacci(100);


//otra opcion
const fibo = (limit, arrayAcum = [0,1]) => {
    arrayAcum = [...arrayAcum, arrayAcum.reduce( (vant, vact) => vant+vact) ];
    return arrayAcum.length >= limit ? arrayAcum : fibo(limit, arrayAcum);
}

console.log(fibo(10)) // 5, 4, 3, 2, 1
