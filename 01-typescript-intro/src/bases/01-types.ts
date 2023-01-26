// si no se quiere que se ejecute el codigo, no hay que exportarlo, si se quiere ejecutar una sola variable se ejecutara todo el codigo.

export let name = 'Andres';
export const age: number = 24;
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener
"" dobles
' simples
inyectar valores ${name}
expresiones ${1+1}
numeros: ${age}
booleanos ${isValid}`

console.log(templateString);