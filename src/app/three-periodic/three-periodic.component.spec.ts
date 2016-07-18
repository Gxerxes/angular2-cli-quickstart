/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ThreePeriodicComponent } from './three-periodic.component';

describe('Component: ThreePeriodic', () => {
  it('should create an instance', () => {
    let component = new ThreePeriodicComponent();
    expect(component).toBeTruthy();
  });
});
