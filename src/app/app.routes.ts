import { Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { UsersComponent } from './Components/users/users.component';
import { DetailsComponent } from './Components/details/details.component';

export const routes: Routes = [
  {path:"",component:UsersComponent},
  {path:"users",component:UsersComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"**",component:ErrorComponent},
];
