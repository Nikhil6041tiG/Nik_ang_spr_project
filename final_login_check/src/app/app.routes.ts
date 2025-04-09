import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ValidComponentComponent } from './valid-component/valid-component.component';
import { DisplayProductsListComponent } from './display-products-list/display-products-list.component';
import { PaymentsFormComponent } from './payments-form/payments-form.component';

export const routes: Routes = 
[
    {path: '',component:LoginFormComponent},
    {path:'valid',component:ValidComponentComponent},
    {path:'products',component:DisplayProductsListComponent},
    {path:'payment', component:PaymentsFormComponent}
];
