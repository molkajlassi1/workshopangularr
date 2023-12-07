import { Component } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import { Apartment } from '../model/Apartment';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  newApartment: Apartment = { id: 0, name: '' }; 

  @Output() add = new EventEmitter<Apartment>();

  save() {
    this.add.emit(this.newApartment);
    this.newApartment = { id: 0, name: '' }; 
  }
}
