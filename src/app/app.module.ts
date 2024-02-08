import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "../components/header/header.component";
import {AdvantagesComponent} from "../components/advantages/advantages.component";
import {FooterComponent} from "../components/footer/footer.component";
import {CategoriesComponent} from "../components/categories/categories.component";
import {ProductsComponent} from "../components/products/products.component";
import {OffersComponent} from "../components/offers/offers.component";
import {FeedbackComponent} from "../components/feedback/feedback.component";
import {FormComponent} from "../components/form/form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvantagesComponent,
    FooterComponent,
    CategoriesComponent,
    ProductsComponent,
    OffersComponent,
    FeedbackComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
