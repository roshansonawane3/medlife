import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductDetailsComponent } from './Component/view-product-details/view-product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { MedicineHomeComponent } from './Components/medicine-home/medicine-home.component';
import { TopDealsByCategoriesComponent } from './Components/top-deals-by-categories/top-deals-by-categories.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"medicine-home",component:MedicineHomeComponent},
{path:"top-deals-by-categories",component:TopDealsByCategoriesComponent},
{path:"view-product-details/:drucode",component:ViewProductDetailsComponent},
{path:"",redirectTo:"/home",pathMatch:"full"},
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
