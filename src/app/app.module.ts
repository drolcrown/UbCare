import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CadastroComponent } from './Componentes/cadastro/cadastro.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AtendimentoComponent } from './Componentes/home/atendimento/atendimento.component';
import { PrevencaoComponent } from './Componentes/home/prevencao/prevencao.component';
import { PrincipalComponent } from './Componentes/home/principal/principal.component';
import { NavegacaoComponent } from './Componentes/navegacao/navegacao.component';
import { ProfissoesComponent } from './Componentes/home/profissoes/profissoes.component';
import { LoginComponent } from './Componentes/login/login.component';
import { FormulariosComponent } from './Componentes/formularios/formularios.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CrudService } from './services/crud.service';
import { AdminComponent } from './Componentes/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    AdminComponent,
    AtendimentoComponent,
    PrevencaoComponent,
    PrincipalComponent,
    NavegacaoComponent,
    ProfissoesComponent,
    LoginComponent,
    FormulariosComponent,
    PerfilComponent,
  ],
  imports: [
    NgbModule, BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
