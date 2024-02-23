import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { ModifComponent } from './modif/modif.component'
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AjoutComponent,
    ListComponent,
    NavbarComponent,
    UpdateComponent,
    ModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
