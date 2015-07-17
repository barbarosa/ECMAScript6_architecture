/**
 * App State Spec
 */

'use strict';

import {expect} from 'chai';
import Baobab from 'baobab';
import AppState from './../../src/js/state/AppState.js';

/**
 * @test {AppState}
 */
describe('AppState Spec', () => {

  it('Expect AppState to be a Baobab instance', () => {
    expect(AppState).to.be.an.instanceof(Baobab);
  });

});
