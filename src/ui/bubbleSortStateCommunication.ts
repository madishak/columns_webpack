import _ from 'lodash';
import { SorterType } from '../types';
import State from '../State';
import render from '../BubbleSortList';
import bubbleSortStateLogger from '../BubbleSortLogger';
import sorterInput from '../SorterInput';

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

export const removeSorters = (id: number): SorterType[] => {
  state.removeSorter(id);
  render(getAllSorters());
  bubbleSortStateLogger(getAllSorters());
  return getAllSorters();
};

export const updateSorters = (id: number, newState: number[]): void => {
  state.updateSorter(id, newState);
  bubbleSortStateLogger(getAllSorters());
};

export const appContainer = (): HTMLElement => {
  return sorterInput({ onClick: addSorters });
};
