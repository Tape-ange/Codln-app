import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { ModalComponent } from './modal/modal.component';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

    BadgeComponent,
    ModalComponent,
    MenuComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    
  MatIconModule,
  RouterModule
  ],
  exports: [
    
    BadgeComponent,
    ModalComponent,
    MenuComponent,
    ListComponent
  ]
})
export class CoreModule { }
