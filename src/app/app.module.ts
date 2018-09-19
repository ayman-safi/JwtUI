import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/Jwt.Interceptor';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      routing,
      FormsModule
   ],
   providers: [
      AuthService,
      AuthGuard,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
