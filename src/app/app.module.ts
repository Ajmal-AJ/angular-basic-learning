import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// headercomponent imported
import { headerComponents } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './container/productlist/product/product.component';
import { FilterComponent } from './container/productlist/filter/filter.component';
import { SearchComponent } from './container/search/search.component';
import { ContainerComponent } from './container/container.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ExampleComponent } from './example/example.component';



// adding component in declaration
@NgModule({
  declarations: [
    AppComponent,
    headerComponents,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductlistComponent,
    ProductComponent,
    FilterComponent,
    SearchComponent,
    ContainerComponent,
    ProductDetailComponent,
    ExampleComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
