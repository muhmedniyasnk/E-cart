import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
         HeaderComponent,
         FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
