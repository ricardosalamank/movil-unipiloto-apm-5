import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {PageTwoComponent} from "../component/page-two.component";
import {AboutComponent} from "../component/about.component";
import {PageOneComponent} from "../component/page-one.component";
import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {LineItemComponent} from "../component/line-item.component";
import {SalesInvoice} from "../component/sales-invoice.component";
import {UserListComponent} from "../component/user-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'product-list', component: ProductListComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'page-line-item', component: LineItemComponent },
    { path: 'line/detail/:id', component: SalesInvoice }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}