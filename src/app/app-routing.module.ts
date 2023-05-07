import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },
  { path: 'pharmstore', loadChildren: () => import('./pages/pharmstore/pharmstore.module').then(m => m.PharmstoreModule), canActivate: [AuthGuard] },
  { path: 'regist', loadChildren: () => import('./pages/regist/regist.module').then(m => m.RegistModule) },
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
