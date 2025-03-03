import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { ForgotPasswordComponent } from './auth-user/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { UserComponent } from './auth-user/user/user.component';


export const routes: Routes = [
     
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"forgot-password",
        component:ForgotPasswordComponent
    },
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"user",
        component:UserComponent
    }
];
