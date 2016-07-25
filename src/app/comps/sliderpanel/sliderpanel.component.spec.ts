/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, ViewContainerRef } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SliderpanelComponent } from './sliderpanel.component';

describe('Component: Sliderpanel', () => {
  it('should create an instance', () => {
    let viewContainerRef: ViewContainerRef;
    let component = new SliderpanelComponent(viewContainerRef);
    expect(component).toBeTruthy();
  });
});
