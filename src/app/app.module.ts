import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      routing
   ],
   providers: [
      AuthService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
