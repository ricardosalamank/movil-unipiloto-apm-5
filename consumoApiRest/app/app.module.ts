import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import {HttpModule} from "@angular/http";

import {ProductService} from "./service/product.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ProductDetailComponent
    ],
    providers: [ProductService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
