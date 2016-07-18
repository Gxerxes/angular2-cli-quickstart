
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'my-app-fractal',
  templateUrl: 'fractal.component.html'
})
export class FractalComponent implements OnInit, AfterViewInit {
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
    this.height = canvas.height = window.innerHeight;

    console.log(moment().format());

    this.render();

  }

  render() {

    requestAnimationFrame(() => this.render());

  }
}
