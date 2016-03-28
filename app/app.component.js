import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { TonyNGService } from './services/tonyng.service';
import { LayoutTopComponent} from './layout/layout-top.component';
import { LayoutSidebarComponent} from './layout/layout-sidebar.component';
import { LayoutBodyComponent} from './layout/layout-body.component';
import { LayoutFooterComponent} from './layout/layout-footer.component';
import { ServersComponent} from './server/server.component';
import { ServerDetailComponent} from './server/server-details.component';
import { SessionsComponent} from './session.component';
import { SessionDetailComponent} from './session-details.component';

@Component({
    selector: 'ngtony',
    template: `
    <h1>{{title}}</h1>
  /*  <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav> */
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
      ROUTER_PROVIDERS,
      HeroService
    ]
})
@RouteConfig([
  {
      path: '/servers',
      name: 'Servers',
      component: ServersComponent,
      useAsDefault: true
  },
  {
      path: '/server/:id',
      name: 'ServerDetail',
      component: ServerDetailComponent
  },
  {
      path: '/sessions',
      name: 'Sessions',
      component: SessionsComponent
  },
  {
      path: '/session/:id',
      name: 'SessionDetail',
      component: SessionComponent
  }
])
export class AppComponent {
    title = 'Tony goes NG';
}


/*
Copyright 2016 NForce IT. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*