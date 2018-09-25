import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class CrudService {
  bdList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getData(model) {
    this.bdList = this.firebase.list(model);
    return this.bdList;
  }

  inserir(model, objeto) {
    this.bdList = this.firebase.list(model);
    this.bdList.push(objeto);
  }

  alterar(model, objeto) {
    this.bdList = this.firebase.list(model);
    this.bdList.update(objeto.$key, objeto);
  }

  deletar(model, key: string) {
    this.bdList = this.firebase.list(model);
    this.bdList.remove(key);
  }
}
