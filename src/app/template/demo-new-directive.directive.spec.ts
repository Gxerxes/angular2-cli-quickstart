/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DemoNewDirective } from './demo-new-directive.directive';

describe('DemoNewDirective Directive', () => {
  it('should create an instance', () => {
    let directive = new DemoNewDirective();
    expect(directive).toBeTruthy();
  });
});
