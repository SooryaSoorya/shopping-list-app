import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MomentModule } from 'ngx-moment';
import { ShoppingListEditRoutingModule } from './shopping-list-edit-routing.module';
import { ShoppingListEditComponent } from './shopping-list-edit.component';

@NgModule({
  declarations: [ShoppingListEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingListEditRoutingModule,
    MaterialModule,
    MomentModule
  ]
})
export class ShoppingListEditModule { }
