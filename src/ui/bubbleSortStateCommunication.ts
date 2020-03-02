import _ from 'lodash';
import { StateTypes, SorterType } from '../types';
import State from '../State';
import SortersState from './sortersState';
import bubbleSortList from '../BubbleSortList';
import bubbleSortStateLogger from '../BubbleSortLogger';
import sorterInput from '../SorterInput';

const app = document.getElementById('app') as HTMLElement;

const state = new State();
const sortersState = new SortersState();

export const getAllSorters = (): SorterType[] => sortersState.getSorter();

const render = (): void => {
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
    sortersState.addSorter({ sorterId: _.uniqueId() as number, sorterArr: newArr });
    state.addState({
      sorters: sortersState.getSorter()
    });
  }
  render();
  return newArr;
};

export const removeSorters = (id: number): SorterType[] => {
  sortersState.removeSorter(id);
  render();
  return getAllSorters();
};

export const updateSorters = (id: number, newState: number[]): SorterType[] => {
  sortersState.updateSorter(id, newState);
  render();
  // bubbleSortStateLogger(getAllSorters());
  return getAllSorters();
};

export const appContainer = (): HTMLElement => {
  return sorterInput({ onClick: addSorters });
};

console.log(state.getState());
