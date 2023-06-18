import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyersComponent } from './buyers/buyers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SellersComponent } from './sellers/sellers.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SaveForLaterComponent } from './save-for-later/save-for-later.component';

const routes: Routes = [
  { path: 'landing', component: LandingpageComponent },
  { path: 'buyers', component: BuyersComponent },
  { path: 'sellers', component: SellersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishList', component: WishlistComponent },
  { path: 'saveForLater', component: SaveForLaterComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
