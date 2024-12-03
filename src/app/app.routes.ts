import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form/user-form.component';
import { UseListViewComponent } from './components/use-list-view/use-list-view.component';

export const routes: Routes = [
    { path: 'list', component: UseListViewComponent },
    { path: 'add-new-user', component: UserFormComponent },
];
