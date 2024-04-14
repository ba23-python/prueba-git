const listaPokemon = document.querySelector("#listaPokemon"); 
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 150; i++){
    fetch(URL + i)
    .then((response) => response.json())
    .then(poke => mostrarPokemon(poke))
}


function mostrarPokemon(poke) {
    

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `<div class="pokemon-imagen"> 
                        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <p class="pokemon-id">#${poke.id}</p>
                            <h2 class="pokemon-nombre">${poke.name}</h2>
                        </div>
                        <div class="pokemon-tipos">
                            <p class="electric-tipo">Electric</p>
                            <p class="fighting-tipo">Fighting</p>
                            <p class="electric-tipo">Height: ${poke.height}</p>
                            <p class="fighting-tipo">Weight: ${poke.weight}</p>
                    
                        </div>
                        
                    </div>`;

    listaPokemon.append(div);

}