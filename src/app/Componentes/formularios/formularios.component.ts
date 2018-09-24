import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  private form: FormGroup;
  private _tipoDeCadastro;
  private _rotaAnterior = "cadastro";
  private _tipoFormulario;
  private _formLista;
  

  constructor(public route: ActivatedRoute, private builder: FormBuilder, private router: Router) { 
  }

  ngOnInit() {
    this._tipoDeCadastro = this.route.snapshot.paramMap.get('rota');
    if(this._tipoDeCadastro == "paciente"){
      this._tipoDeCadastro = "Cadastrar Paciente";
      this._tipoFormulario = {
        Nome: "",
        Idade: "",
        Peso: "",
        Sexo: "",
        Email: "",
        Telefone: "",
        Endereco: "",
        Cep: "",
      };
    }else{
      this._tipoDeCadastro = "Cadastrar Profissional";
      this._tipoFormulario = {
        Nome: "",
        Idade: "",
        Sexo: "",
        Email: "",
        Telefone: "",
        Endereco: "",
        Cep: "",
        Conselho: "",
        Especialidade: "",
      };
    }
    this.form = this.builder.group(this._tipoFormulario);    
    this._formLista = Object.keys(this._tipoFormulario);
  }

  private formLimpo() {
    const listaValObj = Object.values(this.form.value);
    for (let i = 0; i < listaValObj.length; i++) {
      if (listaValObj[i] != null) {
        return false;
      }
    }
    return true;
  }
}
