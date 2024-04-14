PokeApi:
"List the first 150 Pokémon, the real ones from the 1st generation, for this you will have to handle the asynchronous nature and make a request to retrieve the Pokémon. In addition to dynamically painting each of them."

Lista los primeros 150 Pokemons, los de verdad 1ª generación, para ello tendrás que manejar la asincronía y realizar una petición para recuperar los pokemons. Además de pintar de manera dinámica cada uno de ellos.
En nuestro archivo JavaScript tendremos que seguir el siguiente flujo de funciones:

Recuperar la lista con el id "podekex" y almacenarla en una variable.

Ejecutar el fetch mediante una función recuperando los 150 primeros Pokemon a través de un bucle for e indicar el endpoint correcto de la API. En este caso los vamos a recuperar de la siguiente url: https://pokeapi.co/api/v2/pokemon/

1. Lo primero que hice fue crear la maquetacion en HTML y CSS
2. En este etapa aplique el CSS display grid y flex para que las tarjetas de los Pokemons se muestren de forma responsive en cada tamaño de pantalla. Decidi que mis tarjetas van a mostrar el nombre del pokemon, su id, y propiedades adicionales como el peso y la altura, tal y como el tipo-electric o fighting. Cree varios divs para ello que luego le di un poco de CSS.
3. En la fase de escribir el Javascript, aplique for loop para traer los 150 pokemons. la variable listaPokemon obtiene información sobre los primeros 150 Pokémon de la PokeAPI, analiza los datos y luego los muestra en una página web utilizando la función mostrarPokemon.
4. En la funcion mostrarPokemon(poke) Esta genera dinámicamente contenido HTML para mostrar información sobre Pokémon, incluyendo su imagen, nombre, ID, tipos, altura y peso, y lo añade a un contenedor en la página web con el id "listaPokemon".
