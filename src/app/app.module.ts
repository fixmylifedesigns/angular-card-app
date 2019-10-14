import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { HomeService } from './home/home.service'
import { PersonInfo} from './person/person.service'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HomeService, PersonInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
