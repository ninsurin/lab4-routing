import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { HomeComponent } from './home/home.component';
import { CatalogModule } from './catalog/catalog.module';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './productdetil/productdetil.component';
//Homework 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'products',
  component: ProductListComponent
  },
  {
  path: 'products/:id',
  component: ProductDetailComponent
  },
  {
  path: '**',
  component: PageNotFoundComponent
  }
 ];
 
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,CatalogModule,HomeModule,RouterModule.forRoot(routes),BrowserAnimationsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
