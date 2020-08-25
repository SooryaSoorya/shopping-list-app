import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module')
      .then(m => m.ShoppingListModule),
  },
  {
    path: 'shopping-list-edit',
    loadChildren: () => import('./shopping-list-edit/shopping-list-edit.module')
      .then(
        m => m.ShoppingListEditModule,
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
