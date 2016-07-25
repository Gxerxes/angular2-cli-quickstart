import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import {BaCardBlur} from "./ba-card-blur.directive";

@Component({
  moduleId: module.id,
  selector: 'app-ba-card',
  templateUrl: 'ba-card.component.html',
  styleUrls: ['ba-card.component.css'],
  directives: [BaCardBlur],
  encapsulation: ViewEncapsulation.None
})
export class BaCardComponent implements OnInit {

  @Input() title:String;
  @Input() baCardClass:String;

  constructor() {}

  ngOnInit() {
  }

}
