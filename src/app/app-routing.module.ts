import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TestApiComponent } from './test-api/test-api.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './auth.guard';

import { environment } from '../environments/environment';

const LOGIN_ROUTE: string = environment.loginRoute;
const API_TEST_ROUTE: string = environment.apiTestRoute;
const PROTECTED_ROUTE: string = environment.protectedRoute;

const routes: Routes = [
    { path: LOGIN_ROUTE, pathMatch: 'full', component: LoginComponent },
    //apitest should be outside admin route so auth can be tested
    { path: API_TEST_ROUTE, pathMatch: 'full', component: TestApiComponent },
    {
        path: PROTECTED_ROUTE, canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', component: ProtectedComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
