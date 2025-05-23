/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

countries.forEach(country => {
    const li = document.createElement('li');
    li.innerText = country;
    ul.appendChild(li);
})

document.body.appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementDelete = document.querySelector('.fn-remove-me');

elementDelete.remove();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const carsUl = document.createElement('ul');

cars.forEach(car => {
    const li2 = document.createElement('li');
    li2.dataset.function = 'printHere';
    li2.innerText = car;
    carsUl.appendChild(li2);
})

document.body.appendChild(carsUl);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries1.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.innerText = country.title;
    const img = document.createElement('img');
    img.src = country.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
})


/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const deleteLast = document.createElement('button');
deleteLast.innerText = 'Eliminar último';

document.body.appendChild(deleteLast);

deleteLast.addEventListener('click', ()=>{
    const divs = document.querySelectorAll('div');
    const lastDiv = divs[divs.length - 1];
    lastDiv.remove();
})

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/

const divs = document.querySelectorAll('div');

divs.forEach(div => {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar'
    deleteButton.classList = 'delete'
    div.appendChild(deleteButton);
})

const deleteButtons = document.querySelectorAll('.delete')

deleteButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        button.parentNode.remove();
    })
})

