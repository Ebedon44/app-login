import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes 
import { TasksComponent } from './components/tasks/tasks.component'; 
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
const routes: Routes = [
  {
    path: '', redirectTo:'/tasks', pathMatch: 'full' //el pathMach sirve para la redireccion directa 

  },
  {
    path:'tasks', component:TasksComponent
  },
  {
    path:'private', component:PrivateTasksComponent,

  },
  {
    path:'singIn', component:SingInComponent
  },
  {
    path:'singUp', component:SingUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
