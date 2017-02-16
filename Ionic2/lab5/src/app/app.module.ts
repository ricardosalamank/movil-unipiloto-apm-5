import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListProductPage } from '../pages/list-product/list-product';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import {ProductService} from "../providers/product.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListProductPage,
    ProductDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListProductPage,
    ProductDetailPage
  ],
  providers: [ProductService]
})
export class AppModule {}
