// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

const camisetas = []

for (let i=0; i < products.length; i++){
    if(products[i].includes('Camiseta')){
        camisetas.push(products[i]);
    } 
}

console.log(camisetas);