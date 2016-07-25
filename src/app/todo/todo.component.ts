import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SliderpanelComponent } from '../comps/sliderpanel/sliderpanel.component';
import { Todo1Component } from '../todo1/todo1.component';
import { Todo2Component } from '../todo2/todo2.component';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  directives: [SliderpanelComponent, Todo1Component, Todo2Component],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
