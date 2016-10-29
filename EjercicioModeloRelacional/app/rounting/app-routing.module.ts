import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {PageTwoComponent} from "../component/page-two.component";
import {AboutComponent} from "../component/about.component";
import {PageOneComponent} from "../component/page-one.component";
import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'about',  component:  AboutComponent},
    { path: 'page-one', component: PageOneComponent },
    { path: 'page-two', component: PageTwoComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}