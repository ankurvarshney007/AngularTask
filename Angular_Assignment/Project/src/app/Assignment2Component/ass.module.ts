import { NgModule } from "@angular/core";
import { UcomponentComponent } from './ucomponent/ucomponent.component';
import { HighlightdirectiveDirective } from './highlightdirective.directive';
import { CommonModule } from "@angular/common";

@NgModule({ 
   declarations:[UcomponentComponent, HighlightdirectiveDirective],
   imports:[CommonModule],
   exports:[UcomponentComponent,HighlightdirectiveDirective]

})
export class AssignmentModule{

}