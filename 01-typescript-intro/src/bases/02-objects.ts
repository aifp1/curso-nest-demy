//tyupescript identifica el tipo de dato del arreglo
export const pokemonIds = [1,20,30,34,66];

//se realiza conversion de string a number
//pokemonIds.push(+'2');
//console.log(pokemonIds);

//export const pokemon = {
//    id: 1,
//    name: 'Bulbasaur',
//}
//Para que el objeto luzca de una cierta manera se usa interfaces

interface Pokemon {
    id: number;
    name: string;
    //Para valores que pueden venir o no se define de esta manera
    //age?: number,
    //Para valores nulos o undefined se define de esta manera
    //age: number | undefined
    //Se puede combinar los dos y el resultado seria lo siguiente
    //age?: number | undefined;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur",
}

export const charmander: Pokemon = {
    id: 4,
    name: "Charmander",
}

export const pokemons = [];
//pokemons.push(bulbasaur);

console.log(pokemons);