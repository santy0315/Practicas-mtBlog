import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './component/posts/post/post.component';


const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./component/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'post/:id', component: PostComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
