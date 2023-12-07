import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailresidence',
  templateUrl: './detailresidence.component.html',
  styleUrls: ['./detailresidence.component.css']
})
export class DetailresidenceComponent {
constructor(private ac:ActivatedRoute){

}
ngOnInit(){
  alert(this.ac.snapshot.params['idt'])
}
}
