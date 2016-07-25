/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BaCardComponent } from './ba-card.component';

describe('Component: BaCard', () => {
  it('should create an instance', () => {
    let component = new BaCardComponent();
    expect(component).toBeTruthy();
  });
});
