import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './component/app.component';
import { StudentDetailComponent } from './component/student-detail.component';
import { TeacherDetailComponent } from './component/teacher-detail.component';
import {FormsModule} from '@angular/forms';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent,
        StudentDetailComponent,
        TeacherDetailComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
