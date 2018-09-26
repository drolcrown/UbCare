import { Paciente } from "./Paciente";
import { Profissional } from "./Profissional";
import { Perfil } from "./Perfil";
import { Doenca } from "./Doenca";

export class ListaDeModelos {
    private modelo = [
        new Doenca(), new Paciente(), new Perfil(), new Profissional()
    ];

    get getModelo(){
        return this.modelo;
    }
}

