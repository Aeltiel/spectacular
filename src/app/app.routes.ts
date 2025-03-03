import { Routes } from '@angular/router';
import { ParamHaterComponent } from './follow-the-path/param-hater/param-hater.component';
import { SpyExpertComponent } from './spy-expert/spy-expert.component';
import { FollowThePathComponent } from './follow-the-path/follow-the-path.component';
import { NotFoundComponent } from './follow-the-path/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FollowThePathComponent },
  { path: 'mock', component: SpyExpertComponent },
  { path: 'path', component: FollowThePathComponent },
  { path: 'hate/:id', component: ParamHaterComponent },
  { path: '**', component: NotFoundComponent }
];
