import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/model/Apartment';
import { Residences } from 'src/app/model/residence';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  @Input() apartment: Apartment | null = null;
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();
  idresidence:any;
  listApp:Apartment[]=[];
  
  constructor(private ac:ActivatedRoute){

  }
  ngOnInit(){
this.idresidence=this.ac.snapshot.params['id'];
for (let i=0;i<this.listApartments.length;i++){
  if(this.listApartments[i].residence.id==this.idresidence){
    this.listApp.push(this.listApartments[i]);
  }
}
  }
  listResidences: Residences[] = [
    {
      id: 1, "name": "El fel", "address": "Borj Cedria",
      "image": "../../../assets/images/R1.jpeg"
    },
    {
      id: 2, "name": "El yasmine",
      "address": "Ezzahra", "image": "../../../assets/images/R2.jpg"
    },
    {
      id: 3, "name": "El Arij",
      "address": "Rades", "image": "../../../assets/images/R3.jpg"
    },
    {
      id: 4, "name": "El Anber", "address": "Manzah 5",
      "image": "../../../assets/images/R4.jpg"
    }
  ];

  listApartments: Apartment[] = [
    { id: 1, "appartNum": 1, "floorNum": 0, "surface": 100, "terrace": "oui", "surfaceTerrace": 20, "category": "S+1", "description": "AppartementS+1", "residence": this.listResidences[0] },
    { id: 2, "appartNum": 2, "floorNum": 0, "surface": 130, "terrace": "non", "surfaceTerrace": 0, "category": "S+2", "description": "Appartement S+2", "residence": this.listResidences[0] },
    { id: 3, "appartNum": 3, "floorNum": 0, "surface": 150, "terrace": "oui", "surfaceTerrace": 30, "category": "S+3", "description": "Appartement S+3", "residence": this.listResidences[1] }];

    


}
