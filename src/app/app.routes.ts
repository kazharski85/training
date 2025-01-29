import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form/user-form.component';
import { UseListViewComponent } from './components/use-list-view/use-list-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unAuth.guard';

export const routes: Routes = [
    { path: 'list', component: UseListViewComponent, canActivate: [AuthGuard] },
    { path: 'add-new-user', component: UserFormComponent, canActivate: [AuthGuard] },
    { path: 'edit-user/:userId', component: UserFormComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
    { path: 'registration', component: RegistrationComponent, canActivate: [UnAuthGuard] },
];
