import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { ListaDeModelos } from '../../Modelos/ListaDeModelos';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  private form: FormGroup;
  private _tipoDeCadastro;
  private _rotaAnterior = "cadastro";
  private _listaFormulario;
  private _nome;
  private _lista = new ListaDeModelos().getModelo;
  private _profissionais;


  constructor(public route: ActivatedRoute, private builder: FormBuilder,
    private router: Router, private db: CrudService) {
  }

  ngOnInit() {
    this._profissionais = this.db.getLista('profissional');
    // console.log(this._profissionais[])
    //this.route.snapshot.url[0].path retorna o caminho da primeira rota acessada
    this._rotaAnterior = this.route.snapshot.url[0].path;
    this._tipoDeCadastro = this.route.snapshot.paramMap.get('rota');
    let lista = this._lista;
    let nome;
    
    for(let i=0; i < lista.length; i++ ){
      //constructor.name retorna o nome de uma classe
      nome = lista[i].constructor.name;
      if(nome.toLowerCase() == this._tipoDeCadastro){
        this._nome = nome;
        this.form = this.builder.group(lista[i]);
        this._listaFormulario = lista[i].getObjeto;
        return;
      }
    }
  }

  private formLimpo() {
    const listaValObj = Object.values(this.form.value);
    for (let i = 0; i < listaValObj.length; i++) {
      if (listaValObj[i] != null) {
        return false;
      }
    }
    return true;
  }x

  private enviarResposta() {
    this.router.navigate(['/login']);
    this.db.inserir('perfil', this.form.value);
    alert('Cadastro Realizado!!');
  }
}