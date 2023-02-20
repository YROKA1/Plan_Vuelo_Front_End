import { Component } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  abecedario = [
    "#", "a", "b", "c", "d",
    "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x",
    "y", "z"
  ];

  results = new Array();

  ngOnInit() {
    this.chunks(this.abecedario, 3);
  }

  chunks(array= new Array(), size: number) {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    this.results = results;
  }
}
