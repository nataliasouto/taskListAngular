import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatToolbarModule, MatListModule, MatLineModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
  
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
