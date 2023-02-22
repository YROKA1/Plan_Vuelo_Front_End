import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import {CargarScriptsService} from './cargar-scripts.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalTemplateComponent } from './Components/modal-template/modal-template.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ComprasComponent } from './Components/compras/compras.component';
import { FormularioComponenteComponent } from './Formularios/form/formulario-componente.component';
import { HorariosComponent } from './Components/horarios/horarios.component';
import { MenuComponent } from './Components/menu/menu.component';
import { TarifasComponent } from './Components/tarifas/tarifas.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { ReservasComponent } from './Components/reservas/reservas.component';

import { HoverContainerComponent } from './Components/hover-container/hover-container.component';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HoverContainerComponent,
    ComprasComponent,
    FormularioComponenteComponent, 
    ModalTemplateComponent,  
    MenuComponent,
    HorariosComponent,
    TarifasComponent,
    InformacionComponent,
    ReservasComponent,
    LoginComponent

    


  ],
  imports: [

    RouterModule,
    CommonModule,      
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,
    MatDialogModule,
    NgChartsModule,
    BrowserModule, 
    AppRoutingModule, 
    MatGridListModule, 
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatCardModule,
    LayoutModule,
    MatFormFieldModule, 
    MatMenuModule,  
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatRadioModule, 
    ReactiveFormsModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatFormFieldModule
    
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
