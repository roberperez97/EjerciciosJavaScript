//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere"

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const div = document.querySelector("[data-funtion='printHere']");
const ul = document.createElement('ul');

places.forEach(place => {
    const li = document.createElement('li');
    li.innerText = place;
    ul.appendChild(li);
})

div.appendChild(ul);

