import './style.css';
//import { name, age } from './bases/01-types';
//import { pokemonIds, pokemons } from './bases/02-objects';
//import { charmander } from './bases/03-classes';
//import { charmander } from './bases/04-injections';
import { pikachu } from './bases/06-decorators2';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola ${pikachu.name}</h1>
  </div>
`

/* HTML antiguo
<h1>Hola ${charmander.name}</h1>
  <p>Hola ${name}, bienvenido al curso. La edad de ${name} al empezar el curso es ${age}</p>
    <p>ID's: ${pokemonIds}  Pokemon = ${pokemons}</p>
    <p>Hola ${charmander.name}</p>


*/