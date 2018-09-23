import { Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AtendimentoComponent } from './Componentes/home/atendimento/atendimento.component';
import { PrevencaoComponent } from './Componentes/home/prevencao/prevencao.component';
import { PrincipalComponent } from './Componentes/home/principal/principal.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',  component: HomeComponent},
    // { path: 'home/:rota',  component: AtendimentoComponent },
    // { path: 'home/:rota',  component: PrevencaoComponent },
    { path: 'home/:rota',  component: PrincipalComponent },
];
