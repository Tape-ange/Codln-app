import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () =>
    import('./register/register.module').then((m)  => m.RegisterModule)
  },
  {
    path: 'entrepots',
    canActivate: [AuthGuard] ,
    loadChildren: () =>
    import('./views/entrepots/entrepots.module').then((m) => m.EntrepotsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
