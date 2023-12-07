import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './core/manage residence/residences/residences.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './shared/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { DetailresidenceComponent } from './core/manage residence/detailresidence/detailresidence.component';
import { DeleteresidenceComponent } from './core/manage residence/deleteresidence/deleteresidence.component';
import { FormResidenceComponent } from './core/manage residence/form-residence/form-residence.component';
import { ApartmentsComponent } from './core/manage residence/apartments/apartments.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ApartFormComponent } from './core/manageApp/apart-form/apart-form.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { ListApartmentComponent } from './list-apartment/list-apartment.component';
import { UpdateApartmentComponent } from './update-apartment/update-apartment.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ResidencesComponent,
    NotfoundComponent,
    LoginComponent,
    NavComponent,
    DetailresidenceComponent,
    DeleteresidenceComponent,
    FormResidenceComponent,
    ApartmentsComponent,
    ReactiveformComponent,
    ApartFormComponent,
    TvComponent,
    MobileComponent,
    ShowOneProductComponent,
    ErrorsComponent,
    ListApartmentComponent,
    UpdateApartmentComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
