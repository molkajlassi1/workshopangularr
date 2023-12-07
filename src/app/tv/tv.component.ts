import { Component } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
tv=[
  {id:1,name:"Sony1",price:100,quantity:5,like:0},
  {id:2,name:"Sony 2",price:100,quantity:5,like:0},
  {id:3,name:"Sony 3",price:100,quantity:5,like:0},
  {id:4,name:"Sony 4",price:100,quantity:5,like:0},
]

afterrecivedata(e:any){
let index=this.tv.indexOf(e);
this.tv[index].like++
}
}
