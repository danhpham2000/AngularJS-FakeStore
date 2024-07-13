import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component';
import {MyFirstService} from "./services/my-first.service";
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { provideHttpClient, withJsonpSupport} from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    MyFirstService,
    provideHttpClient(withJsonpSupport())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
