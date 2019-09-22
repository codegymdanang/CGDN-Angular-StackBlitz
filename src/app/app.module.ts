import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from "./cart/cart.component";
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent},
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component : CartComponent},
      { path: 'user', component : UserComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
      CartComponent,
      UserComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


