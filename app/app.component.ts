import {Component}     from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';
import {Btn} from './btn';
import {HeroService} from './hero.service';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {EditorComponent} from './editor.component';


@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template:`
  <h1>Component Router</h1>
  <nav>
    <a [routerLink]="['/Heroes']">Heroes</a>
    <a [routerLink]="['/HeroEditor']">Editor</a>
  </nav>

  <router-outlet></router-outlet>
  

    `,
    styles:[`
`],
  providers: [HeroService]
})

  @RouteConfig([
    { path: '/', name: 'Heroes', component: HeroListComponent, useAsDefault: true },
    { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent },
    { path: '/editor', name: 'HeroEditor', component: EditorComponent }
  ])
export class AppComponent{
	
}
