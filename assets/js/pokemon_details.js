
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

let pokemonNumber;
if (pokemonId) {
    pokemonNumber = parseInt(pokemonId); 
} else {
    console.error('ID do Pokémon ausente na URL.');
}

function displayPokemonDetails(pokemonNumber) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado.');
            }
            return response.json();
        })
        .then((data) => {
            
            const pokemonDetails = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Tipo: ${data.types.map((type) => type.type.name).join(', ')}</p>
                <p>Altura: ${data.height / 10} m</p>
                <p>Peso: ${data.weight / 10} kg</p>
            `;

        
            document.getElementById('pokemonDetails').innerHTML = pokemonDetails;
        })
        .catch((error) => {
            console.error(error.message);
        });
}


 pokemonNumber ; 

displayPokemonDetails(pokemonNumber);