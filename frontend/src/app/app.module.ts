import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { TrainerviewComponent } from './trainerview/trainerview.component';
import { PlacementofficerviewComponent } from './placementofficerview/placementofficerview.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    StudentviewComponent,
    TrainerviewComponent,
    PlacementofficerviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers:  [ApiService,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
