import { RegisterComponent } from './components/account/register/register.component';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeService } from './services/recipe.service';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'recipes', component: RecipesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RecipesComponent,
    FeaturedCardComponent,
    NewRecipeComponent,
    RecipeCardComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule
  ],
  providers: [AuthService, FlashMessagesService, UserService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
