import axios from 'axios';
import { PokeapiResponse, Move } from '../interfaces/poleapi-response.interace';

export class Pokemon {

    get imageUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public id: number;
    public name: string;

    //any es un tipo de dato el cual puede ser cualquiera
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        console.log("Constructor llamado")
    }

    //metodo asincrono que regresa una promesa
    //una promesa es compromiso cuando sera notificado que esa promesa se cumplio y habra alguien esperando que se cumpla esta accion
    
    //metodos
    scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data)
        return data.moves;
    }
}
//readonly no permite cambiar el contenido de la variable

export const charmander = new Pokemon(4, "Charmander");

console.log(charmander)

charmander.speak();
charmander.scream();

charmander.getMoves();