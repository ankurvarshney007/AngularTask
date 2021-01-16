import { NgModule } from "@angular/core";
import { UserComponentComponent } from "./user-component/user-component.component";
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

@NgModule({ 
   declarations:[UserComponentComponent, NavBarComponentComponent, HomecomponentComponent],
   imports:[CommonModule,RouterModule],
   exports:[UserComponentComponent,NavBarComponentComponent,HomecomponentComponent]

})
export class ComponentModule{

}