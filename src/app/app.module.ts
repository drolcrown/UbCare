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

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
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
    HttpClientModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
