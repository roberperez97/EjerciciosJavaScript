// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];


function finderName(array, value) {
    const index = array.indexOf(value);

    if(index !== -1){
        return {found:true, position:index}``;
    } else{
        return {found:false};
    }
}

console.log(finderName(nameFinder, 'Tony'));
console.log(finderName(nameFinder, 'Carlos'));