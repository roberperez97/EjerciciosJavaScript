/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement('ul');
document.body.appendChild(ul);

albums.forEach(album =>{
    const li = document.createElement('li');
    li.innerText = album;
    ul.appendChild(li);
})