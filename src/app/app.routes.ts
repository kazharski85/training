import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form/user-form.component';
import { UseListViewComponent } from './components/use-list-view/use-list-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { authGuard, unAuthGuard } from './guards/app.guard';

export const routes: Routes = [
    { path: 'list', component: UseListViewComponent, canActivate: [authGuard] },
    { path: 'add-new-user', component: UserFormComponent, canActivate: [authGuard] },
    { path: 'edit-user/:userId', component: UserFormComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent, canActivate: [unAuthGuard] },
    { path: 'registration', component: RegistrationComponent, canActivate: [unAuthGuard] },
];
