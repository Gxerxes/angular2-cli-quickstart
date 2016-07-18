import { Component, OnInit,  ViewChild, ElementRef, ViewEncapsulation  } from '@angular/core';

/// <reference path="../../../typings/threejs/three.d.ts" />
declare var THREE: any;
//import * as THREE from 'three';
declare var SystemJS: any;

@Component({
  moduleId: module.id,
  selector: 'app-three-periodic',
  templateUrl: 'three-periodic.component.html',
  styleUrls: ['three-periodic.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThreePeriodicComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    SystemJS.import('../../assets/js/css3d_periodictable.js').then(comp => {
      console.log(comp);
      comp.init();
    }).catch(function (err) {
      console.log(err)
    });
  }

}
