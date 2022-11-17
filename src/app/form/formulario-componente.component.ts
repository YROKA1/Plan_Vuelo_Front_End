import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalService } from 'src/app/Service/modal/modal.service';
import { TipoComponente } from '../Models/perfil-model/tipo_componente';
import { ApiService } from '../Service/api.service';
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
      'nestado': ['', Validators.required],
      'destado': ['', Validators.required],
    });  
  }

  ngOnInit(): void {
  }
  onSubmit() {
    var  nombre_estado =  this.addressForm.controls['nestado'].value
var  descrip_estado =  this.addressForm.controls['destado'].value
var unEstado: TipoComponente= Object.assign({"NombreEstado":nombre_estado,"DescripcionEstado":descrip_estado})

this.service.postAll("Estadoes",unEstado);

  }
}

