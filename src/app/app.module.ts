import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CadastroComponent } from './Componentes/cadastro/cadastro.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AtendimentoComponent } from './Componentes/home/atendimento/atendimento.component';
import { PrevencaoComponent } from './Componentes/home/prevencao/prevencao.component';
import { PrincipalComponent } from './Componentes/home/principal/principal.component';
import { NavegacaoComponent } from './Componentes/home/navegacao/navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    AtendimentoComponent,
    PrevencaoComponent,
    PrincipalComponent,
    NavegacaoComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
