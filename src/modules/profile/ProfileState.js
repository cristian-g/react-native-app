import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import {generateRandomNumber} from '../../services/randomNumberService';

// Initial state
const initialState = Map({
    background: 'rgba(255, 255, 255, 1)',
    serverports: []
});

// Actions
const INCREMENT = 'ProfileState/INCREMENT';
const RESET = 'ProfileState/RESET';
const RANDOM_REQUEST = 'ProfileState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'ProfileState/RANDOM_RESPONSE';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}

export function random() {
  return {
    type: RANDOM_REQUEST
  };
}

export async function requestRandomNumber() {
  return {
    type: RANDOM_RESPONSE,
    payload: await generateRandomNumber()
  };
}

// Reducer
export default function ProfileStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    case RESET:
      return initialState;

    case RANDOM_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(requestRandomNumber)
      );

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
