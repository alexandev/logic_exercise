//anagrama

let $palabra1 = 'roma';
let $palabra2 = 'amor';

const isAnagram = ($palabra1, $palabra2) => {
    return $palabra1.split('').reverse().join('') === $palabra2 ? true : false;
}

if(isAnagram($palabra1, $palabra2)){
    console.log('Es anagrama');
}else{
    console.log('No es anagrama');
}

