import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  public chart: any;
  public cantUsuarios1: any;
  public cliente: any;
  public conductor: any;
  public ventas: any;
  public servicios: any;

  constructor() { }

  ngOnInit(): void {
    this.clientesCiudad();
    this.conductorCiudad();
    this.ventasMes();
    this.serviciosMes();
    this.tipoMercanciaTransportada();
    this.serviciosCiudad();
  }
  createChart(){
  var a=10;
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', '2022-01-06'], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', a, '92',
								 '574', '573', '576','30'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }


  conductorCiudad() {
    
    this.cantUsuarios1 = new Chart("conductorCant", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Bogota', 'Santa Marta', 'Cali', 'Medellin'],
        datasets: [
          {
            data: ['6', '2', '4', '7'],
          }
        ]
      },
    });
  }

  clientesCiudad() {
    this.cliente = new Chart("clienteCant", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Bogota', 'Santa Marta', 'Cali', 'Medellin'],
        datasets: [
          {
            data: ['6', '2', '4', '7'],
          }
        ]
      },
    });
  }


  findCantCli() {

  }

  ventasMes() {
    this.ventas = new Chart("ventas", {
      type: 'bar',
      data: {
        labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        datasets: [
          {
            label: 'Pesos (COP) vendidos',
            data: [12, 14, 1, 7, 8, 1],
            borderWidth: 1,
            backgroundColor: 'rgba(147, 223, 255, 0.596)',
            hoverBackgroundColor: 'rgb(147, 222, 255)',
            borderColor: 'rgb(147, 222, 255)',
            hoverBorderColor: 'rgb(126, 212, 248)',
          }
          ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  serviciosMes() {
    this.servicios = new Chart("servicios", {
      type: 'bar',
      data: {
        labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        datasets: [
          {
            label: 'Pesos (COP) vendidos',
            data: [12, 14, 1, 7, 8, 1],
            borderWidth: 1,
            backgroundColor: 'rgba(211, 211, 211, 0.37)',
            hoverBackgroundColor: 'rgb(211, 211, 211)',
            borderColor: 'rgb(211, 211, 211)',
            hoverBorderColor: 'rgb(211, 211, 211)',
          }
          ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  tipoMercanciaTransportada() {
    this.conductor = new Chart("tipoMerc", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Granel', 'Liquido', 'Fragil', 'Peligroso', 'Materia prima'],
        datasets: [
          {
            data: ['70', '40', '100', '80', '10'],
          }
        ]
      },
    });
  }

  serviciosCiudad() {
    this.conductor = new Chart("serviciosCiu", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Bogota', 'Santa Marta', 'Cali', 'Medellin'],
        datasets: [
          {
            data: ['70', '40', '100', '80'],
          }
        ]
      },
    });
  }
}
