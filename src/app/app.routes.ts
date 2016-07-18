import { provideRouter, RouterConfig } from '@angular/router';
import { LineIntersectionComponent } from './line-intersection/line-intersection.component';

// Route config let's you map routes to components
const routes: RouterConfig = [
  // map '/persons' to the people list component
  {
    path: 'line-intersection',
    component: LineIntersectionComponent,
  }
  // // map '/persons/:id' to person details component
  // {
  //   path: 'persons/:id',
  //   component: PersonDetailsComponent
  // },
  // map '/' to '/persons' as our default route
  // {
  //   path: '',
  //   redirectTo: '/persons',
  //   pathMatch: 'full'
  // },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
