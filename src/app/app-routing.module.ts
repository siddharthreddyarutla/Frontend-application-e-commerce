import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { BuyersComponent } from './buyers/buyers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SellersComponent } from './sellers/sellers.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'Home', component: HomepageComponent},
  { path: 'buyers', component: BuyersComponent },
  { path: 'sellers', component: SellersComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'wishlist', component: WishlistComponent},
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
