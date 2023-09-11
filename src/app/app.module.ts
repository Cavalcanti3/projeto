import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CreateComponent } from './Contatos/create/create.component';
import { IndexComponent } from './Contatos/index/index.component';
import { ViewComponent } from './Contatos/view/view.component';
import { ContatosComponent } from './Contatos/contatos/contatos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    CreateComponent,
    IndexComponent,
    ViewComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
