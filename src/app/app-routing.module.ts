import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Auth',

    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Usuario',

    loadChildren: () =>
      import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule),
  },

  {
    path: '**',
    redirectTo: 'Auth',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
