import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoutubevideosComponent } from './youtubevideos/youtubevideos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThismonthComponent } from './thismonth/thismonth.component';
import { LastmonthComponent } from './lastmonth/lastmonth.component';
import { SliderComponent } from './slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubecommentsComponent } from './youtubecomments/youtubecomments.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubevideosComponent,
    HeaderComponent,
    FooterComponent,
    ThismonthComponent,
    LastmonthComponent,
    SliderComponent,
    YoutubecommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
