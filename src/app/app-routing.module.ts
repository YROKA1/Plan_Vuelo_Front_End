import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './Components/compras/compras.component';
import { HorariosComponent } from './Components/horarios/horarios.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { TarifasComponent } from './Components/tarifas/tarifas.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';


const routes: Routes = [
  { path: ' ', redirectTo: 'menu', pathMatch: 'full' },
  
  { path: 'horarios', component: HorariosComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
