import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryService} from 'src/app/shared/category.service';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {AuthGuard} from 'src/app/auth.guard';
import {TokenInterceptorService} from 'src/app/shared/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    SidebarModule
    
  ],
  providers: [CategoryService,MessageService, ConfirmationService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
