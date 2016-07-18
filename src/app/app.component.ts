import { Component } from '@angular/core';
import { Route, ROUTER_DIRECTIVES} from '@angular/router';
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar/toolbar";
import { MdAnchor, MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MdButton, MdAnchor, MdIcon],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title = 'app works!';
}
