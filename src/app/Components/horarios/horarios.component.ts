import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Service/api.service';
import { ModalService } from 'src/app/Service/modal/modal.service';
import { HorariosModel } from 'src/app/Models/HorariosModel';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';


@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  checked= false;
  vuelo: any[];
  hora: any[];
  aerolinea: any[];
  aeropuerto: any[];
  max=new Array();
  labelPosition = new Array();
  Defectuosos: boolean;
  Optimos: boolean;
  arrayColumns: string[];
  saveBtn = true;
  controlador: string;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  tablaHorarios=new Array();



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public modalservice: ModalService, public service: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.getAeropuerto();
    this.getAerolinea();
    this.getVuelo();
    this.getHora();
    this.getTabla();

  }
  public  getAeropuerto() {
    this.controlador="Aeropuertoes";
     this.service.getAll(this.controlador).then((res) => {
      this.aeropuerto = res;
      this.max[this.max.length]=res.length
      if(this.max[this.max.length-1]==undefined){
        this.max[0]=res.length;
       }
      console.log(this.aeropuerto)
    });
  }

  public  getAerolinea() {
    this.controlador="Aerolineas";
     this.service.getAll(this.controlador).then((res) => {
      this.aerolinea = res;
      this.max[this.max.length]=res.length
      if(this.max[this.max.length-1]==undefined){
        this.max[0]=res.length;
       }
       
      console.log(this.aerolinea)
    });
  }

  public  getVuelo() {
    this.controlador="Vueloes";
     this.service.getAll(this.controlador).then((res) => {
      this.vuelo = res;
      this.max[this.max.length]=res.length
      if(this.max[this.max.length-1]==undefined){
        this.max[0]=res.length;
       }
      //console.log(res)
      console.log(this.max)
    });
  }

  public  getHora() {

    this.controlador="Horarios";
     this.service.getAll(this.controlador).then((res) => {
      for (let index = 0; index < res.length; index++) {
        var splitted = res[index].fecha.split("T"); 
        res[index].fecha=splitted[0];
      }
      this.hora = res;
      this.max[this.max.length]=res.length
      if(this.max[this.max.length-1]==undefined){
        this.max[0]=res.length;
       }
      //console.log(this.hora)
      console.log(this.max)
      console.log(this.max.length)
    });
  }
  public a(){
    console.log(this.max.length)
  }

  public getTabla() {
    this.controlador="Aeropuertoes";
    this.service.getAll(this.controlador).then((res) => {
    
        var indAerolinea
        var indOrigen
        var indDestino
        var indFecha_Salida
        var indFecha_Llegada
        var indHora_Salida
        var indHora_Llegada
        var tab: HorariosModel;
        var cont=-99999;
    
    for (var index = 0; index < this.max.length; index++) {
      if(this.max[index]>=cont){
        cont=this.max[index];
      }
      
    }
    
    for (let i = 0; i < cont; i++) {

      if(i+1<=this.vuelo.length){

      for (let j = 0; j < cont; j++) {

         console.log(this.aerolinea[0].idAerolinea)
         if((j+1<=this.aerolinea.length)){
          if((this.vuelo[i].idAerolinea == this.aerolinea[j].idAerolinea) && (j+1<=this.aerolinea.length)){
            indAerolinea= this.aerolinea[j].nombreAerolinea
          }
         }
       
       
       if((j+1<=this.aeropuerto.length)){
        if(this.vuelo[i].aeropuertoOrigen == this.aeropuerto[j].idAeropuerto){
          indOrigen= this.aeropuerto[j].nombreCiudad+", "+this.aeropuerto[j].nombrePais
        }
      }
      if((j+1<=this.aeropuerto.length)){
        if(this.vuelo[i].aeropuertoDestino == this.aeropuerto[j].idAeropuerto){
          indDestino= this.aeropuerto[j].nombreCiudad+", "+this.aeropuerto[j].nombrePais
        }
      }

      if((j+1<=this.hora.length)){
        if(this.vuelo[i].fechaSalida == this.hora[j].idHorario ){
          indFecha_Salida= this.hora[j].fecha
        }
      }
      if((j+1<=this.hora.length)){
        if(this.vuelo[i].fechaSalida == this.hora[j].idHorario ){
          indHora_Salida= this.hora[j].hora
        }
      }
      if((j+1<=this.hora.length)){
        if(this.vuelo[i].fechaLlegada == this.hora[j].idHorario ){
          indFecha_Llegada= this.hora[j].fecha
        }
      }
      if((j+1<=this.hora.length)){
        if(this.vuelo[i].fechaLlegada == this.hora[j].idHorario){
          indHora_Llegada= this.hora[j].hora
        }
      }

       
      }
      tab=Object.assign({"Aerolinea":indAerolinea,"Origen":indOrigen,"Destino":indDestino,"Fecha_Salida":indFecha_Salida,"Hora_Salida":indHora_Salida,"Fecha_Llegada":indFecha_Llegada,"Hora_Llegada":indHora_Llegada})
      this.tablaHorarios[i]=tab;
      console.log(this.tablaHorarios[i])
    }
    }

    console.log(this.tablaHorarios)
      for (let index = 0; index < this.tablaHorarios.length; index++) {
        console.log(this.tablaHorarios[index]);
        this.loadTable([this.tablaHorarios[index]]);
      }
    
      this.dataSource.data = this.tablaHorarios;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  

  }
  loadEstado(e:any, a:any){
    this.labelPosition[a]=e;
    console.log(e)
    console.log(a)
  }


  loadTable(data: any[]) {

    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
  

  }
  filtroOP(e: boolean){
    var filterValue="";
    this.Optimos=e;
    console.log(this.Optimos)
    if(this.Optimos==true){
       filterValue="optimo";
       this.Defectuosos=false;
    }
    if(this.Optimos==false){
       filterValue="";
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  filtroDEF(e: boolean){
    var filterValue="";
    this.Defectuosos=e;
    console.log(this.Defectuosos)
    if(this.Defectuosos==true){
       filterValue="defectuoso";
       this.Optimos=false;
    }
    if(this.Defectuosos==false){
       filterValue="";
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
  id(element: any){
    this.arrayColumns.push(element)
  }
  getValue(event: Event): string {
    
    return (event.target as HTMLInputElement).value;
    
  }
}

