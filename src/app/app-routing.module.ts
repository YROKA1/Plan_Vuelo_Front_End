import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './Components/compras/compras.component';
import { HorariosComponent } from './Components/horarios/horarios.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { TarifasComponent } from './Components/tarifas/tarifas.component';
import { ReactiveFormsModule } from '@angular/forms'; 


const routes: Routes = [
  { path: ' ', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'horarios', component: HorariosComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'informacion', component: InformacionComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
