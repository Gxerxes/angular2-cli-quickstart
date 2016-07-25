import { Component, OnInit } from '@angular/core';
import { SliderpanelComponent } from '../comps/sliderpanel/sliderpanel.component';

@Component({
  moduleId: module.id,
  selector: 'app-todo2',
  templateUrl: 'todo2.component.html',
  styleUrls: ['todo2.component.css']
})
export class Todo2Component implements OnInit {

  private sliderPanel:SliderpanelComponent;

  constructor(sliderPanel:SliderpanelComponent) {
    this.sliderPanel = sliderPanel;
  }

  private onPrev(event) {
    this.sliderPanel.slideToPage('todo1', 'right')
  }

  ngOnInit() {
  }

}
