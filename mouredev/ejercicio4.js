
const calcularArea = (poligono) => {

    const tiposDePoligonos = ['cuadrado', 'triangulo', 'rectangulo'];
    let {tipo, lado, ladob, base, altura} = poligono
    tipo = tipo.toLowerCase();
    let area;

    if(!tiposDePoligonos.some(el => el == tipo)) return console.log('Tipo de poligono incorrecto');

    if(tipo === 'cuadrado') area = Math.pow(lado,2);
    else if(tipo === 'rectangulo') area = lado * ladob;
    else if(tipo === 'triangulo') area = (base * altura)/2;

    console.log(`El area del ${tipo} es: ${area}`)
}



const unPoligono = {
    tipo : 'Triangulo',
    // lado : 5,
    // ladob: 4,
    base: 5,
    // altura: 2
}

calcularArea(unPoligono);