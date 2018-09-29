import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  tipoComponent: any;
  objComponent: any;
  nomeComponent: string;
  _altura = {
    height: window.innerHeight + 'px'
  };

  constructor( private builder: FormBuilder, private router: Router, private db: CrudService) {
    this.form = this.builder.group({
      usuario: ['', Validators.required ],
      senha: ['', Validators.required ],
    });
  }

  ngOnInit() {
    // let fire = this.firebase.database.ref();
    // console.log(fire.
    // ]
  console.log('Usuario : ',this.db.getLista('usuario'));
  console.log('Profissional', this.db.getLista('profissional'));
  
}

  formLimpo() {
    if (this.form.controls.usuario.invalid && this.form.controls.senha.invalid) {
      return false;
    }
    return true;
  }

  private enviarResposta() {
    this.router.navigate(['/home']);
    console.log("Login On")
    // Ainda falta verificar se o usuario enviado esta cadastrado
  }
}
