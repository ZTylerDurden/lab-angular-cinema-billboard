import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';

// services
import {MoviesService} from "./services/movies.service";

// routes:
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path:"", redirectTo: "home", pathMatch:"full"
  }, {
    path: "home", component: MyHomeComponentComponent
  }, {
    path: "movie/:id", component: MyMovieComponentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponentComponent,
    MyHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
