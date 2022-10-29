import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './component/pages/container-app/container-app.component';
import { DetailsPostComponent } from './component/posts/details-post/details-post.component';

const routes: Routes = [
  {path : '',component: ContainerAppComponent,
  children:[
    { path: 'home', loadChildren: () => import('./component/pages/home/home.module').then(m => m.HomeModule) },
    { path: 'post/:id', component: DetailsPostComponent },
    { path: 'about', loadChildren: () => import('./component/pages/about/about.module').then(m => m.AboutModule) },
    { path : '', redirectTo: 'home', pathMatch:'full'}
  
  ] 
},
 
  { path: 'admin', loadChildren: () => import('./component/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./component/auth/login/login.module').then(m => m.LoginModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
