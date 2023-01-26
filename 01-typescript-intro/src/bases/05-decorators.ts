//El decorador de la clase tiene acceso a la clase y tiene acceso a muchas partes

class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`NO QUIERO!!!`);
    }

    speak() {
        console.log(`No quiero hablar`);
    }

}

const MyDecorator = () =>{
    return (target: Function) => {
        console.log(target);
        return NewPokemon;
    }
}

@MyDecorator()

export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }
}

export const pikachu = new Pokemon(25, 'Pikachu');

pikachu.scream();
pikachu.speak();