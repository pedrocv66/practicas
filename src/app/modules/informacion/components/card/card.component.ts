import { Component } from '@angular/core';
//importamos informacion card
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //definimos propiedad publica como info del tipo array
  public info: Card[];
  constructor(){
    this.info=[
      {
        idCard:"1",
        titulo: "mandarina",
        descripcion:"naranja",
        imagen:"",
        alt: "foto mandarina"
      },
      {
        idCard:"2",
        titulo: "banana",
        descripcion:"banana amarilla",
        imagen:"",
        alt: "foto banana"
      },
      {
      idCard:"3",
      titulo: "manzana",
      descripcion:"roja",
      imagen:"https://www.google.com/imgres?q=foto%20manzana&imgurl=https%3A%2F%2Fwww.recetasnestle.com.co%2Fsites%2Fdefault%2Ffiles%2Finline-images%2Ftipos-de-manzana-royal-gala_0.jpg&imgrefurl=https%3A%2F%2Fwww.recetasnestle.com.co%2Fblog-sabor%2Fingredientes%2Fmanzana-verde-roja&docid=_o5udCrnE7eoqM&tbnid=8mRthNnHI7JklM&vet=12ahUKEwjrg_rCutaHAxVqp5UCHUXPHo4QM3oECGUQAA..i&w=380&h=260&hcb=2&ved=2ahUKEwjrg_rCutaHAxVqp5UCHUXPHo4QM3oECGUQAA",
      alt: "foto manzana"
      }
    ]
  }
}
