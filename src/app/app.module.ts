import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './Components/home/home.component';
import { MedicineHomeComponent } from './Components/medicine-home/medicine-home.component';
import { HttpClientModule } from '@angular/common/http';
import { TopDealsComponent } from './home/top-deals/top-deals.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopDealsByCategoriesComponent } from './Components/top-deals-by-categories/top-deals-by-categories.component';
import { ViewProductDetailsComponent } from './Component/view-product-details/view-product-details.component';
import { TopDealsHeaderComponent } from './Component/top-deals-header/top-deals-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    TopDealsByCategoriesComponent,
    ViewProductDetailsComponent,
    TopDealsHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
