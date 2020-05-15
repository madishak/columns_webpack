import _ from 'lodash';
import { SorterType } from '../types';
import State from '../state';
import render from './bubbleSortApp';
import bubbleSortStateLogger from './bubbleSortLogger';
import sorterInput from '../sorter/sorterInput';

const state = new State();

export const getAllSorters = (): SorterType[] => state.getState().sorters;

export const addSorters = (newArr: number[]): number[] => {
  if (newArr.length) {
    state.addSorter({ sorterId: _.uniqueId(), sorterArr: newArr });
  }
  render(getAllSorters());
  bubbleSortStateLogger(getAllSorters());
  return newArr;
};

export const removeSorters = (id: string): SorterType[] => {
  state.removeSorter(id);
  render(getAllSorters());
  bubbleSortStateLogger(getAllSorters());
  return getAllSorters();
};

export const updateSorters = (id: string, newState: number[]): void => {
  state.updateSorter(id, newState);
  bubbleSortStateLogger(getAllSorters());
};

export const appContainer = (): HTMLElement => {
  return sorterInput({ onClick: addSorters });
};
