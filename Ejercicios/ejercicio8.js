//Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(words) {
    let longest = words[0];

    for (let i=1; i<words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }

    return longest;
}

console.log(findLongestWord(avengers));