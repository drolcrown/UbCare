export class Paciente {
    private Nome: String;
    private DatadeNascimento: String;
    private Sexo: String;
    private Email: String;
    private Telefone: String;
    private Endereco: String;
    private Cep: String;
    private Peso: Number;

    constructor() {
        this.Nome = null;
        this.DatadeNascimento = null;
        this.Sexo = null;
        this.Email = null;
        this.Telefone = null;
        this.Endereco = null;
        this.Cep = null;
        this.Peso = null;
    }
    get getObjeto(){
        return  [
            { nome: "Nome", tipo: "text", valor: [], max: "" },
            { nome: "DatadeNascimento", tipo: "date", valor: [], max: "1990-12-12" },
            { nome: "Sexo", tipo: "radio", valor: ["Masculino", "Feminino"], max: "" },
            { nome: "Email", tipo: "email", valor: [], max: "" },
            { nome: "Telefone", tipo: "tel", valor: [], max: "" },
            { nome: "Endereco", tipo: "text", valor: [], max: "" },
            { nome: "Cep", tipo: "text", valor: [], max: "" },
            { nome: "Peso", tipo: "number", valor: [], max: "" },
        ];
    }
}

