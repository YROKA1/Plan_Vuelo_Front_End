import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Service/api.service';
import { ModalService } from 'src/app/Service/modal/modal.service';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {
  saveBtn = true;
  controlador="Estadoes";
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public modalservice: ModalService, public service: ApiService, public dialog: MatDialog) {
    
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.get();

  }
  public async get() {
    await this.service.getAll(this.controlador).then((res) => {
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]]);

      }
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }



  loadTable(data: any[]) {

    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
   

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  save() {
    this.saveBtn = true;
    localStorage.setItem("data", JSON.stringify(this.dataSource.data));
    
    for (let column=0 ; column < this.dataSource.data.length; column++) {
      this.service.putAll(this.controlador + "/" + this.dataSource.data[column].idEstado,this.dataSource.data[column])
      console.log(this.dataSource.data[column]);
    }
    this.refresh();
    
  }
  refresh(){
    setTimeout(function(){
      window.location.reload();
   }, 2000);
  }
  edit() {
    this.saveBtn = false;
  }
  delete(valor: number) {
    console.log(valor)
    this.service.deleteAll(this.controlador+"/"+ valor)
    this.refresh();
  
  }
  type(ele: any, value: any, val: any) {
    console.log(ele);
    console.log(value);
    console.log(val);
    console.log(ele["val"]);
    ele[val] = value;
    //console.log(this.dataSource);
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }






  openDialog() {
    this.modalservice.accion.next("componentes")
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto', 
      width: 'auto'
    }); 
  }
}
