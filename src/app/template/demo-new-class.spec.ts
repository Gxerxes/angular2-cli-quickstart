/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {DemoNewClass} from './demo-new-class';

describe('DemoNewClass', () => {
  it('should create an instance', () => {
    expect(new DemoNewClass()).toBeTruthy();
  });
});