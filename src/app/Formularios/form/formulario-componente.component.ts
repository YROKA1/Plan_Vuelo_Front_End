import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalService } from 'src/app/Service/modal/modal.service';
import { ApiService } from '../../Service/api.service';
export interface TipoComponente{
  NombreEstado: String;
  DescripcionEstado: String;
  }
export interface PerfilModel{
  IdUsuario: Number | null; 
  ClaveUsuario: String | null; 
  IdPerfil: Number | null; 
  NombreUsuario: String | null; 
}
@Component({
  selector: 'app-formulario-componente',
  templateUrl: './formulario-componente.component.html',
  styleUrls: ['./formulario-componente.component.css'],
})


export class FormularioComponenteComponent implements OnInit {
  addressForm : FormGroup;



  constructor(
    private fb: FormBuilder,
    public modalService: ModalService,
    public service:ApiService
  ) {
    this.addressForm = this.fb.group({
      'nomcomponente': ['', Validators.required],
      'descomponete': ['', Validators.required],
      'iddispositivo': ['', Validators.required],
      'fechacompra': ['', Validators.required],
      'fechavida': ['', Validators.required],
    });  
  }

  ngOnInit(): void {
  }
  onSubmit() {
var  nombre_com =  this.addressForm.controls['nomcomponente'].value
var  descrip_com =  this.addressForm.controls['descomponete'].value
var  id_dis =  this.addressForm.controls['iddispositivo'].value
var  fe_compra =  this.addressForm.controls['fechacompra'].value
var  fe_vida =  this.addressForm.controls['fechavida'].value
var unCom: TipoComponente= Object.assign({"nombreComponente":nombre_com,"descripcionComponente":descrip_com,"idDispositivo":id_dis,"fechacompraComponente":fe_compra,"finvidautilComponente":fe_vida})

this.service.postAll("Componentes",unCom);

  }
}


