/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {Effects} from 'redux-loop-symbol-ponyfill';
import {initialState, dispatch} from '../../../../test/state';
import * as MyCarsStateActions from '../MyCarsState';

describe('MyCarsState', () => {

  // Example of how to test multiple dispatches in series
  describe('increment', () => {
    const getValue = state => state.getIn(['myCars', 'value']);

    it('should increment the value property by one', () => {
      const [secondState] = dispatch(initialState, MyCarsStateActions.increment());
      expect(getValue(secondState)).toBe(getValue(initialState) + 1);

      const [thirdState] = dispatch(secondState, MyCarsStateActions.increment());
      expect(getValue(thirdState)).toBe(getValue(secondState) + 1);
    });
  });

  describe('reset', () => {
    it('should reset the my_cars state to initial value', () => {
      // create an incremented state to test against
      const [modifiedState] = dispatch(initialState, MyCarsStateActions.increment());
      expect(modifiedState.get('myCars')).not.toBe(initialState.get('myCars'));

      // reset to original and verify it === initial state
      const [resetState] = dispatch(modifiedState, MyCarsStateActions.reset());
      expect(resetState.get('myCars')).toBe(initialState.get('myCars'));
    });
  });

  // Example of how to test side effects returned from reducers
  describe('random', () => {

    const [nextState, effects] = dispatch(initialState, MyCarsStateActions.random());

    it('should update loading bit', () => {
      expect(nextState.getIn(['myCars', 'loading'])).toBe(true);
    });

    it('should trigger a requestRandomNumber side effect', () => {
      expect(effects).toEqual(
        Effects.promise(MyCarsStateActions.requestRandomNumber)
      );
    });
  });

  // Example of how to test async action creators
  describe('requestRandomNumber', () => {
    // randomizer uses timeouts to delay response, let's make it execute
    // instantly to improve test speed
    beforeEach(() => {
      // jest 16 still breaks Promises...
      global.Promise = require.requireActual('promise');
      // instantly resolve timeouts
      global.setTimeout = (cb) => cb();
    });

    it('should generate a random number and dispatch it', async () => {
      const action = await MyCarsStateActions.requestRandomNumber();
      expect(typeof action.payload).toBe('number');

      const [nextState] = dispatch(initialState, action);
      expect(nextState.getIn(['myCars', 'value'])).toBe(action.payload);
      expect(nextState.getIn(['myCars', 'loading'])).toBe(false);
    });
  });
});
