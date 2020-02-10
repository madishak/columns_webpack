import _ from 'lodash';
import { SorterType } from './types';
import State from './state';
import render from './bubbleSortApp';
import bubbleSortStateLogger from './bubbleSortLogger';

const state = new State();

export const getAllSorters = (): SorterType[] => state.getState().sorters;

export const startRenderHandler = (newArr: number[]): void => {
  if (newArr.length) {
    state.addSorter({ sorterId: _.uniqueId(), sorterArr: newArr });
  }
  state.addRefForView(render);
  state.addRefForView(bubbleSortStateLogger);
  state.viewState();
};

export const removeSortersHandler = (id: number): void => {
  state.removeSorter(id);
  state.viewState();
};

export const updateSortersHandler = (id: number, newState: number[]): void => {
  const { sorters } = state.getState();
  state.updateSorter(id, newState);
  bubbleSortStateLogger(sorters);
};
