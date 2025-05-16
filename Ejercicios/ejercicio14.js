// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {

    const contador = {};

    for (let i=0; i<param.length; i++){
        const palabra = param[i];
        if(contador[palabra]){
            contador[palabra]++;
        } else{
            contador[palabra] = 1;
        }
    }

    return contador;
}

console.log(repeatCounter(counterWords));