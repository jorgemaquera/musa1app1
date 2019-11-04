import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GeneralRoutingModule } from './general-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    NgbDropdownModule
  ],
  exports: [HeaderComponent]
})
export class GeneralModule { }
