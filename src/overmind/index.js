import { createHook } from 'overmind-react';
import { state } from './state';
import * as effects from './effects';
import * as actions from './actions';

export const config = {
  state,
  effects,
  actions,
};

export const useOvermind = createHook();
