// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Injectable()
// export class UserService {
//   public _ENDPOINT = 'http://sibot-boss.brazilsouth.cloudapp.azure.com:8080/sibot-des/rest/';
//   public _usuarioLogado;
//   public _contador = 15000;

//   constructor(public http: HttpClient, public router: Router) {
//     this._usuarioLogado = false;
//   }

//   iniciarSessao(objeto){
//     // Procurar o usuario no banco 
//     // this.http.post<any>(`${this._ENDPOINT}usuario/login`, objeto)
//     // .subscribe(resp =>{
//     //   if(resp != []){
//     //     this.setUsuarioLogado();
//     //     this._username = sessionStorage.getItem(objeto);
//     //   }
//     // });
//     this.setUsuarioLogado();
//     sessionStorage.setItem("usuario", objeto.usuario);
//     // setTimeout(this.encerrarSessao, this._contador);
//   }

//   encerrarSessao(){
//     // alert("SESSAO ENCERRADA");
//     this._usuarioLogado = false;
//     // sessionStorage.removeItem(objeto);
//     sessionStorage.clear();
//     this.router.navigate(['']);
//   }

//   setUsuarioLogado(){
//     this._usuarioLogado = true;
//   }

//   getUsuarioLogado() {
//   	return this._usuarioLogado;
//   }

//   getUsuario() {
//   	return sessionStorage.getItem('usuario');
//   }

//   resetarSessao() {
//     this._contador+= this._contador;
//   	// return sessionStorage.getItem('usuario');
//   }

// }
