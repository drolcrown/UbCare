import { Profissional } from "./Profissional";

export class Doenca {
    private Nome: String;
    private Descricao: String;
    private Tratamento: String;
    private ProfissionaisResponsaveis: Array<any>;
    // private objeto = [
    //     { nome: "Nome", tipo: "text", valor: [], max: "" },
    //     { nome: "Descricao", tipo: "text", valor: [], max: "1990-12-12" },
    //     { nome: "Tratamento", tipo: "text", valor: [], max: "" },
    //     { nome: "ProfissionaisResponsaveis", tipo: "array", valor: [], max: "" },
    // ];

    constructor() {
        this.Nome = null;
        this.Descricao = null;
        this.Tratamento = null;
        this.ProfissionaisResponsaveis = [];
        // this.objeto[3].valor = this.ProfissionaisResponsaveis;
    }

    adicionarProfissional(prof: Profissional) {
        this.ProfissionaisResponsaveis.push(prof);
        // this.objeto[3].valor = this.ProfissionaisResponsaveis;
        return this.ProfissionaisResponsaveis;
    }

    get getObjeto() {
        return [
            { nome: "Nome", tipo: "text", valor: [], max: "" },
            { nome: "Descricao", tipo: "text", valor: [], max: "1990-12-12" },
            { nome: "Tratamento", tipo: "text", valor: [], max: "" },
            {
                nome: "ProfissionaisResponsaveis", tipo: "checkbox",
                valor: this.ProfissionaisResponsaveis, max: ""
            },
        ];
    }
}

