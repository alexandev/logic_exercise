const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]


const contarOvejas = (ovejas) => {
    ovejas = ovejas.filter( ({color, name}) => color === 'rojo' &&  name.toLowerCase().includes('a') && name.toLowerCase().includes('n'));

    return ovejas
}


const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)