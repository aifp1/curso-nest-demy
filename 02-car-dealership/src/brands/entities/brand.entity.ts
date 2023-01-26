//Como es la informacion que quiero que quede guardada en la base de datos
//No lleva la palabra entity pq es el mismo nombre que debe tener la tabla de la base de datos
export class Brand {
    id: string;
    name: string
    createdAt: number;
    updatedAt?: number;
}
