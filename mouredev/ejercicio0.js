let n = 1;

const divisiblePara3 = (numero) => {
    return numero%3 == 0 ? true : false ;
}

const divisiblePara5 = (numero) => {
    return numero%5 == 0 ? true : false ;
}


while( n < 101 ){

    let valor = n;

    if(divisiblePara3(n)){
        valor += " fizz"
    }

    if(divisiblePara5(n)){
        valor += " buzz"
    }
    console.log(valor);
    n++;
}
