import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { AuthenGuard } from './authen.guard';
import { LoginComponent } from './login/login.component';
import { OtherComponent } from './other/other.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'user',component:UserComponent, canActivate:[AuthenGuard]},
  {path:'other',redirectTo:'/user'},
  {path:'login',component:LoginComponent},
  {path:'assignment',component:AssignmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }