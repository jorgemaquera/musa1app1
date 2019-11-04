import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BtnMd01Component } from './btn-md01/btn-md01.component';
import { BtnMd02Component } from './btn-md02/btn-md02.component';
import { BtnMd03Component } from './btn-md03/btn-md03.component';
import { BtnMd04Component } from './btn-md04/btn-md04.component';
import { BtnMd05Component } from './btn-md05/btn-md05.component';
import { BtnMd06Component } from './btn-md06/btn-md06.component';
import { BtnMd07Component } from './btn-md07/btn-md07.component';
import { BtnMd08Component } from './btn-md08/btn-md08.component';
import { GeneralModule } from '../components/general.module';

@NgModule({
  declarations: [
    LayoutComponent,
    BtnMd01Component,
    BtnMd02Component,
    BtnMd03Component,
    BtnMd04Component,
    BtnMd05Component,
    BtnMd06Component,
    BtnMd07Component,
    BtnMd08Component
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    GeneralModule
  ]
})
export class LayoutModule { }
