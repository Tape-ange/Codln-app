import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntrepotsComponent } from './list-entrepots/list-entrepots.component';
import { CreateEntrepotsComponent } from './create-entrepots/create-entrepots.component';
import { DetailEntrepotsComponent } from './detail-entrepots/detail-entrepots.component';
import { EntrepotsComponent } from './entrepots/entrepots.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'

const routes : Routes =[
  {
    path: '',
    component: ListEntrepotsComponent
  },
  {
    path: 'creerEntrepots',
    component: CreateEntrepotsComponent
  }
]

@NgModule({
  declarations: [
    ListEntrepotsComponent,
    CreateEntrepotsComponent,
    DetailEntrepotsComponent,
    EntrepotsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    CoreModule,
    RouterModule.forChild(routes),
   
  ]
})
export class EntrepotsModule { }
