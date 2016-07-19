/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DemoNewPipePipe } from './demo-new-pipe.pipe';

describe('Pipe: DemoNewPipe', () => {
  it('create an instance', () => {
    let pipe = new DemoNewPipePipe();
    expect(pipe).toBeTruthy();
  });
});
