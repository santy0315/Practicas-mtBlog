import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './component/posts/new-post/new-post.component';
import { NewPostModule } from './component/posts/new-post/new-post.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';

/* Firebase */
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';   
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './component/pages/container-app/container-app.component';
import { ModalComponent } from './shared/component/modal/modal.component';
import { EditPostComponent } from './component/posts/edit-post/edit-post.component';
import { DetailsPostComponent } from './component/posts/details-post/details-post.component';




@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
    DetailsPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NewPostModule,
    MaterialModule,
    ReactiveFormsModule,
    


  ],
  entryComponents:[ModalComponent],
  providers: [
    {provide: StorageBucket, useValue: 'gs://metblog-20a1c.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
