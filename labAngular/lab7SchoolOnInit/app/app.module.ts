import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import {FormsModule} from '@angular/forms';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent,
        ProductDetailComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
