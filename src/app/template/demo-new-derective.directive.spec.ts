/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DemoNewDerective } from './demo-new-derective.directive';

describe('DemoNewDerective Directive', () => {
  it('should create an instance', () => {
    let directive = new DemoNewDerective();
    expect(directive).toBeTruthy();
  });
});
