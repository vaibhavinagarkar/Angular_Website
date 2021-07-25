import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DocsComponent,
    ResourcesComponent,
    EventsComponent,
    BlogsComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
