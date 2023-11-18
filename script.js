const lista = document.getElementById("character-list");
const previousPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");

let currentPage = 1;

function fetchAndDisplayCharacters(page) {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then((data) => {

      const ulElement = document.createElement('ul');

      data.results.forEach((character) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <p>${character.name}</p>
          <p>${character.species}</p>
        `;
        ulElement.appendChild(listItem);
      });

      lista.innerHTML = '';
      lista.appendChild(ulElement);
    })
    .catch((error) => {
      console.error('Error al obtener datos:', error);
    });
}


/*
previousPageButton.addEventListener("click", () => {
  if () {
    currentPage--;
    fetchAndDisplayCharacters(currentPage);
  }
});

nextPageButton.addEventListener("click", () => {
    if () {
  currentPage++;
  fetchAndDisplayCharacters(currentPage);
});
*/

fetchAndDisplayCharacters(currentPage);
