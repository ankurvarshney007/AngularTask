import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UcomponentComponent } from './Assignment2Component/ucomponent/ucomponent.component';
import { HomecomponentComponent } from './Components/homecomponent/homecomponent.component';
import { UserComponentComponent } from './Components/user-component/user-component.component';

const routes: Routes = [ {

  path: 'Assignment1',

  component: UserComponentComponent

},
{

  path: 'Assignment2',

  component: UcomponentComponent

},
{

  path: '',

  component: HomecomponentComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
