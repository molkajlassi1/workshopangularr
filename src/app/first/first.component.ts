import { Component } from '@angular/core';
import { Residences } from '../model/residence';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  klass = '4sae4'
  kolor = 'red'
  showMsg() {
    console.log('bonjour 4SAE4')
  }
  changeColor() {
    this.kolor = 'pink'
  }
  sayHello(){
    alert('hello')
  }
ChangeKolor(){
  this.color="green"
}
  color='yellow'
  listResidences:Residences[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Borj Cedria","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];

    search="";
}
