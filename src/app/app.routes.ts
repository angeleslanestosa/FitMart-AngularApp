import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { FitmartAboutComponent } from './fitmart-about/fitmart-about.component';
import { FitmartProductsComponent } from './fitmart-products/fitmart-products.component';
import { FitmartShopcartComponent } from './fitmart-shopcart/fitmart-shopcart.component';
import { FitmartHomeComponent } from './fitmart-home/fitmart-home.component';


export const routes: Routes = [
    {path: 'home', component: FitmartHomeComponent},
    {path: 'products', component: FitmartProductsComponent},
    {path: 'about', component: FitmartAboutComponent},
    {path: 'shopcart', component: FitmartShopcartComponent},
    
    
];
