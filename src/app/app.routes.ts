import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'all-products',
        component:ProductsListComponent,
        title:'All Products'

    },
    {
        path:'product-details/:id',
        component:ProductDetailsComponent,
        title:'Product Details'

    },
    {
        path:'cart',
        component:CartComponent,
        title:'Cart'

    },
    {
        path:'login',
        component:LoginComponent,
        title:'Login'

    },
    {
        path:'register',
        component:RegisterComponent,
        title:'Register'

    },
    {
        path:'about-us',
        component:AboutUsComponent,
        title:'About Us'

    },
    {
        path:'**',
        component:NotfoundComponent,
        title:'Not Found'

    },

];
