import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {BaCardComponent} from "../comps/ba-card/ba-card.component";
import {PopularappComponent} from "../comps/popularapp/popularapp.component";

// /// <reference path="../../../typings/globals/underscore/index.d.ts" />
// declare var _: any;

// import * as _ from 'underscore';

// import * as _ from 'lodash';

@Component({
  selector: 'my-app-line-intersection',
  templateUrl: 'app/line-intersection/line-intersection.component.html',
  directives: [BaCardComponent, PopularappComponent]
})
export class LineIntersectionComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  width: any;
  height: any;
  centerY: any;
  centerX; any;
  offset: any;
  speed: any;
  angle: any;

  @ViewChild("myCanvas") myCanvas: ElementRef;

  ngOnInit() {

  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2d");
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight - 84;

    this.render();

   // _.each([1,2,3], console.log);

  }

  render() {

    requestAnimationFrame(() => this.render());

  }
}
