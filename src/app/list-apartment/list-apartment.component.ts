
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
})
export class ListApartmentComponent {
  apartments: Apartment[] = [];
  selectedApartment: Apartment | null = null;

  deleteApartment(index: number) {
    this.apartments.splice(index, 1);
  }

  updateApartment(index: number) {
    this.selectedApartment = this.apartments[index];
  }

  addApartment(apartment: Apartment) {
    this.apartments.push(apartment);
  }
}

interface Apartment {
  
  id: number;
  name: string;

}
