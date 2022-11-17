import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { MisiVisiComponent } from './Components/misi-visi/misi-visi.component';
import { InstitutoComponent } from './Components/instituto/instituto.component';
import { EmpresaComponent } from './Components/empresa/empresa.component';
import { ConsultaComponent } from './Components/consulta/consulta.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from './Components/shared/shared.module';
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
import { LoginComponent } from './Components/login/login.component';
import { AlertaComponent } from './Components/alerta/alerta.component';
import { HistorialComponent } from './Components/historial/historial.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { ComponentesComponent } from './Components/componentes/componentes.component';
import { ConsultasComponent } from './Components/consultas/consultas.component';
import { Navigation2Component } from './Components/afterLogin/navigation2/navigation2.component';
import { FormularioComponenteComponent } from './form/formulario-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MisiVisiComponent,
    InstitutoComponent,
    EmpresaComponent,
    ConsultaComponent, 
    NavigationComponent, 
    LoginComponent, 
    AlertaComponent, 
    HistorialComponent, 
    UsuariosComponent, 
    ComponentesComponent, 
    ConsultasComponent, 
    Navigation2Component,
    FormularioComponenteComponent, 
    ModalTemplateComponent, 

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    MatGridListModule, 
    BrowserAnimationsModule, 
    SharedModule, 
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
