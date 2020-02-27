import _ from 'lodash';
import { StateTypes, SorterType } from '../types';
import State from '../State';
import bubbleSortList from '../BubbleSortList';
import bubbleSortStateLogger from '../BubbleSortLogger';
import sorterInput from '../SorterInput';

const app = document.getElementById('app') as HTMLElement;

const state = new State();

export const getAllSorters = (): SorterType[] => state.getState().sorters;

const renderAll = (): void => {
  app.append(
    bubbleSortList({
      sorters: getAllSorters(),
      removeSorter: removeSorters,
      updateSorter: updateSorters
    })
  );
  bubbleSortStateLogger(getAllSorters());
};

export const addSorters = (newArr: number[]): number[] => {
  if (newArr.length) {
    state.addSorter({ sorterId: _.uniqueId(), sorterArr: newArr });
  }
  renderAll();
  return newArr;
};

export const removeSorters = (id: number): SorterType[] => {
  state.removeSorter(id);
  renderAll();
  return getAllSorters();
};

export const updateSorters = (id: number, newState: number[]): SorterType[] => {
  state.updateSorter(id, newState);
  renderAll();
  // bubbleSortStateLogger(getAllSorters());
  return getAllSorters();
};

export const appContainer = (): HTMLElement => {
  return sorterInput({ onClick: addSorters });
};
