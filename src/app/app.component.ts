import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Route, ROUTER_DIRECTIVES} from '@angular/router';
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar/toolbar";
import { MdAnchor, MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import {BacktotopComponent} from "./comps/backtotop/backtotop.component";

declare var SystemJS: any;
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MdButton, MdAnchor, MdIcon, BacktotopComponent],
  providers: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'app works!';
  navCls = 'nav-md';

  ngOnInit() {

    SystemJS.import('../../assets/js/gentelella.js').then(comp => {
      console.log(comp);
      comp.init();
    }).catch(function (err) {
      console.log(err)
    });
  }

  toggle() {
    if( this.navCls === 'nav-md') {
      this.navCls = 'nav-sm';
    } else {
      this.navCls = 'nav-md';
    }

  }
}
