import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameReactiveComponent } from './components/name-reactive/name-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameTemplateComponent } from './components/name-template/name-template.component';
import { LoginTemplateComponent } from './components/login-template/login-template.component';
import { LoginReactiveComponent } from './components/login-reactive/login-reactive.component';
import { PhoneNumbersComponent } from './components/phone-numbers/phone-numbers.component';
import { RequiredGroupDirective } from './required-group/required-group.directive';
import { HttpClientModule } from '@angular/common/http';
import { ValidateToDoDirective } from './validateToDo/validateToDo.directive';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    NameReactiveComponent,
    NameTemplateComponent,
    LoginTemplateComponent,
    LoginReactiveComponent,
    PhoneNumbersComponent,
    RequiredGroupDirective,
    ValidateToDoDirective,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
