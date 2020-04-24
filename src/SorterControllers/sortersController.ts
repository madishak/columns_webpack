import { uniqueId } from 'lodash';
import { SorterType } from '../types';
import State from '../State';
import SortersStorage from './sortersStorage';
import bubbleSortList from '../BubbleSortList';
import bubbleSortStateLogger from '../BubbleSortLogger';
import sorterInput from '../SorterInput';

const app = document.getElementById('app') as HTMLElement;

const state = new State();
const sortersStorage = new SortersStorage();

export const getAllSorters = (): SorterType[] => {
  const { sorters } = state.getState();
  if (sorters === undefined) {
    throw new Error("Sorters' array is empty");
  }
  return sorters;
};

export const addSorters = (newArr: number[]): number[] => {
  if (newArr.length) {
    sortersStorage.addSorter({ sorterId: uniqueId(), sorterArr: newArr, indexList: [] });
    state.addState({
      sorters: sortersStorage.getSorter(),
    });
  }
  render();
  return newArr;
};

export const removeSorters = (id: string): SorterType[] => {
  sortersStorage.removeSorter(id);
  state.addState({
    sorters: sortersStorage.getSorter(),
  });
  render();
  return getAllSorters();
};

export const updateSorters = (
  id: string,
  newState: number[],
  indexList: number[],
): SorterType[] => {
  sortersStorage.updateSorter(id, newState, indexList);
  state.addState({
    sorters: sortersStorage.getSorter(),
  });
  render();
  return getAllSorters();
};

export const appContainer = (): HTMLElement => {
  return sorterInput({ onClick: addSorters });
};

const render = (): void => {
  app.append(
    bubbleSortList({
      sorters: getAllSorters(),
      removeSorter: removeSorters,
      updateSorter: updateSorters,
    }),
  );
  bubbleSortStateLogger(getAllSorters());
};
