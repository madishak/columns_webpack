import _ from 'lodash';
import { SorterType } from '../types';
import State from '../state';
import render from './bubbleSortApp';
import bubbleSortStateLogger from './bubbleSortLogger';

const state = new State();

export const getAllSorters = (): SorterType[] => state.getState().sorters;

export const addSorters = (newArr: number[]): void => {
  if (newArr.length) {
    state.addSorter({ sorterId: _.uniqueId(), sorterArr: newArr });
  }
  render(getAllSorters());
  bubbleSortStateLogger(getAllSorters());
};

export const removeSorters = (id: number): void => {
  state.removeSorter(id);
  render(getAllSorters());
  bubbleSortStateLogger(getAllSorters());
};

export const updateSorters = (id: number, newState: number[]): void => {
  state.updateSorter(id, newState);
  bubbleSortStateLogger(getAllSorters());
};
