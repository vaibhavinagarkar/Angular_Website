import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TextComponent } from './text/text.component';



const routes: Routes = [
  { path: '', component: TextComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'blogs', component:  BlogsComponent },
  { path: 'resources', component: ResourcesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
