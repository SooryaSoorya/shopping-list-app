import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListEditComponent } from './shopping-list-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListEditRoutingModule { }
