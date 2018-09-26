import { Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AtendimentoComponent } from './Componentes/home/atendimento/atendimento.component';
import { PrevencaoComponent } from './Componentes/home/prevencao/prevencao.component';
import { PrincipalComponent } from './Componentes/home/principal/principal.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { CadastroComponent } from './Componentes/cadastro/cadastro.component';
import { FormulariosComponent } from './Componentes/formularios/formularios.component';
import { AdminComponent } from './Componentes/admin/admin.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home',  component: HomeComponent},
    { path: 'home/:rota',  component: PrincipalComponent },
    { path: 'admin/cadastro/:rota',  component: FormulariosComponent },
    { path: 'admin',  component: AdminComponent},
    // { path: 'home/:rota',  component: AtendimentoComponent },
    // { path: 'home/:rota',  component: PrevencaoComponent },
    { path: 'home/:rota',  component: PrincipalComponent },
    { path: 'cadastro/:rota',  component: FormulariosComponent },
    { path: 'cadastro',  component: CadastroComponent },
    { path: 'perfil',  component: PerfilComponent},
];
