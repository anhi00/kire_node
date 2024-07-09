import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { IndividualComponent } from './individual/individual.component';

export const routes: Routes = [

    { path:'home', component: HomeComponent},
    { path:'', component: HomeComponent},
    { path: 'products', component:ProductsComponent},
    { path:'individual', component:IndividualComponent}

];
