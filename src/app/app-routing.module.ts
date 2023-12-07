import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ResidencesComponent } from './core/manage residence/residences/residences.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './shared/login/login.component';
import { DetailresidenceComponent } from './core/manage residence/detailresidence/detailresidence.component';
import { DeleteresidenceComponent } from './core/manage residence/deleteresidence/deleteresidence.component';
import { FormResidenceComponent } from './core/manage residence/form-residence/form-residence.component';
import { ApartmentsComponent } from './core/manage residence/apartments/apartments.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ApartFormComponent } from './core/manageApp/apart-form/apart-form.component';

const r: Routes = [
  {path:'addresidence',component:FormResidenceComponent},
  {path:'app/:id',component:ApartmentsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'detail/:idt', component: DetailresidenceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'first', component: FirstComponent },
  {
    path: 'r', component: ResidencesComponent, children: [
      { path: 'remove', component: DeleteresidenceComponent }
    ]
  },
  { path: 'addr', component: ReactiveformComponent },
  { path: 'addapp', component: ApartFormComponent },
  { path: '404', component: NotfoundComponent },
  {path:'**',redirectTo:'404',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
