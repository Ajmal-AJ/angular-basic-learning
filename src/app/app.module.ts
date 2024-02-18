import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// headercomponent imported
import { headerComponents } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './productlist/product/product.component';
import { FilterComponent } from './productlist/filter/filter.component';



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
    FilterComponent 
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
