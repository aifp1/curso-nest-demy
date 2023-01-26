//adapter es porque se adaptara funcionalidades de terceros a mi codigo
import axios from "axios";

//se usara las interfaces para decir como lucen las clases, ejemplo no importa como a llega b, solo importa que a llega hasta b
export interface HttpAdapter {
    get<T>(url: string):Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter{
    async get<T>(url: string):Promise<T>{
        const resp = await fetch(url);
        const data = resp.json();
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter{

    private readonly servicio = axios;

    async get<T>(url: string){
        //peticion get
        const { data } = await this.servicio.get<T>(url);
        return data;
    }
    async post(url: string, data: any){
        return;
    }
    async patch(url: string, data: any){
        return;
    }
    async delete(url: string){
        return;
    }
}