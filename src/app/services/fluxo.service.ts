// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { Subject } from 'rxjs/Subject';
// // import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class FluxoService {
//   public _ENDPOINT = 'http://sibot-dev.brazilsouth.cloudapp.azure.com:8080/sibot/rest/';
//   // public _ENDPOINT = 'http://20.40.112.43:8080/bot-web-processa/';
//   // public ENDPOINT_INICIO = 'http://20.40.112.43:8080/bot-web-inicio';
//   constructor(public http: HttpClient) { }

//   public httpHeaders = {
//     headers: new HttpHeaders({
//       'content-type': 'application/json'
//     })
//   };


//   public consultaBanco(url, param): Subject<any> {
//     let subject = new Subject();
//     if (param == 'null') {
//       this.http.get<any>(`${this._ENDPOINT}${url}`, this.httpHeaders)
//         .subscribe(response => {
//           subject.next(response);
//         });
//     } else {
//       this.http.post<any>(`${this._ENDPOINT}${url}`, param, this.httpHeaders)
//         .subscribe(response => {
//           subject.next(response);
//         });
//     }
//     return  subject;
//   }

//   public buscarFluxoService(fluxo, indice) {
    
//     if (!fluxo) {
//       return "";
//     }
//     else {
//       if (indice) {
//         return Object.values(fluxo)[0];
//       }
//       else {
//         let listaObjetos = Object.entries(fluxo);
//         for (let i = 0; i < listaObjetos.length; i++) {
//           //Nesses ifs eu busco só as chaves que comecam com de ou no;
//           if (listaObjetos[i][0].substring(0, 2) == 'no' || listaObjetos[i][0].substring(0, 2) == 'de') {
//             return listaObjetos[i][1];
//           }
//         }
//         //Esse ultimo return só acontece para conversas que são os unicos modelos que não tem descricao ou nome;
//         // A conversa não possui nome ou descricao, usa-se o nome do dialogo da propria conversa
//         if(typeof fluxo == 'object'){
//           return listaObjetos[0][1] + ' - ' + fluxo.dialogo.noDialogo;
//         }else{
//           console.log(listaObjetos);
//         }
//       }
//     }
//   }
// }