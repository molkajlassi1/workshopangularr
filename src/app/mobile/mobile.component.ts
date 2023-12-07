import { Component, ViewChild } from '@angular/core';
import { ShowOneProductComponent } from '../show-one-product/show-one-product.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  @ViewChild(ShowOneProductComponent)private cchild!:ShowOneProductComponent;

  tv=[
    {id:1,name:"Sony mobile 1",price:100,quantity:5,like:0},
    {id:2,name:"Sony mobile 2",price:100,quantity:5,like:0},
    {id:3,name:"Sony mobile 3",price:100,quantity:5,like:0},
    {id:4,name:"Sony mobile 4",price:100,quantity:5,like:0},
  ];
  traitment(e:any){
let index=this.tv.indexOf(e)
this.tv[index].like++
  }
  executeUneMehtode(){
    this.cchild.showMsg()
  }
}
