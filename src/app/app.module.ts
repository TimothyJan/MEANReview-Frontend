import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewsComponent } from './components/pages/reviews/reviews.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { TvseriesComponent } from './components/pages/tvseries/tvseries.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { TitlePipe } from './pipes/title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TitleComponent,
    FooterComponent,
    ReviewsComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    TvseriesComponent,
    CarouselComponent,
    LoadingSpinnerComponent,
    CarouselItemComponent,
    TitlePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
