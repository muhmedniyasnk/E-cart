import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
{ path: '', component: AllProductsComponent },
{path:'cart',component:CartComponent},
{ path:'wish-list',component:WishlistComponent},
{ path:'all-products',component:AllProductsComponent},
{ path:'**',component:PagenotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
