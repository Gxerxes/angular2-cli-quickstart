import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SliderpanelComponent } from '../comps/sliderpanel/sliderpanel.component';

@Component({
    moduleId: module.id,
    selector: 'app-todo1',
    templateUrl: 'todo1.component.html',
    styleUrls: ['todo1.component.css']
})
export class Todo1Component implements OnInit {

    private sliderPanel: SliderpanelComponent;
  
    constructor(sliderPanel:SliderpanelComponent, private ref:ChangeDetectorRef) {
      this.sliderPanel = sliderPanel;
    }
  
    ngOnInit() {
    }
  
    private onForceDetection() {
      this.ref.markForCheck();
      console.log('cd completed')
    }
  
    private onNext(event) {
      this.sliderPanel.slideToPage('todo2', 'left')
    }

}
