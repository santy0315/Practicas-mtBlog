import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './component/posts/post/post.component';


const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./component/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'post/:id', component: PostComponent },
  { path: 'about', loadChildren: () => import('./component/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'admin', loadChildren: () => import('./component/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./component/auth/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
