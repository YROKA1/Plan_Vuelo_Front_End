import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './Components/consulta/consulta.component';
import { EmpresaComponent } from './Components/empresa/empresa.component';
import { InstitutoComponent } from './Components/instituto/instituto.component';
import { MisiVisiComponent } from './Components/misi-visi/misi-visi.component';
import { LoginComponent } from './Components/login/login.component';
import { AlertaComponent } from './Components/alerta/alerta.component';
import { HistorialComponent } from './Components/historial/historial.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ComponentesComponent } from './Components/componentes/componentes.component';
import { ConsultasComponent } from './Components/consultas/consultas.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'instituto', component: InstitutoComponent },

  
  { path: 'alerta', component: AlertaComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'componentes', component: ComponentesComponent },
  { path: 'consultas', component: ConsultasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
