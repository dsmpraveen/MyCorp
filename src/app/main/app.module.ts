import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import {NotFoundComponent} from './notfound.component';

import { HomeComponent } from '../home/home.component';

import { ProductComponent } from '../products/product.component';
import { ProductDetailsComponent} from '../products/product.detail.component';


import { OrderComponent } from '../orders/order.component';
import {OrderService} from '../orders/order.service';
import { ProductService } from '../products/product.service';
import {StarComponent} from '../shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    ProductDetailsComponent,
    HomeComponent,
    NotFoundComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
           
      {path:'products',component:ProductComponent},
      {path:'products/:id',component:ProductDetailsComponent},
      {path:'orders',component:OrderComponent},
      {path:'home',component: HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:NotFoundComponent}
      
  ])
  ],
  providers: [
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
