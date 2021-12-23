import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import {
  RecaptchaModule,
  RecaptchaFormsModule,
  RecaptchaSettings,
  RECAPTCHA_SETTINGS,
} from 'ng-recaptcha';

const globalKey: RecaptchaSettings = {
  siteKey: '6Le94P0UAAAAAAoYwhQ_PBAZgzrnrKGmwDkcMHAg',
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalKey,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
