// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let contador = 0
    for(let i=0; i < param.length; i++){
        if(typeof param[i]=== 'string'){
            contador = contador + param[i].length;
        } else{
            contador = contador + param[i];
        }
    }
    return media = contador / param.length;
}

console.log(averageWord(mixedElements));