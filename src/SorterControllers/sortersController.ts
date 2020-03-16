import _ from 'lodash';
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
  console.log('dshbfhasbdhj', sorters);
  console.log(typeof sorters);
  if (sorters === undefined) {
    throw new Error("Sorters' array is empty");
  }
  return sorters;
};

const render = (): void => {
  app.append(
    bubbleSortList({
      sorters: getAllSorters(),
      removeSorter: removeSorters,
      updateSorter: _.curry(updateSorters)
    })
  );
  bubbleSortStateLogger(getAllSorters());
};

export const addSorters = (newArr: number[]): number[] => {
  if (newArr.length) {
    sortersStorage.addSorter({ sorterId: _.uniqueId(), sorterArr: newArr });
    state.addState({
      sorters: sortersStorage.getSorter()
    });
  }
  render();
  return newArr;
};
const t = () => {
  Math.random();
  state.addState({
    numbers: [5, 5, 5, 5, 5, 5, 5, Math.random()]
  });
  console.log(state.getState());
};
export const removeSorters = (id: string): SorterType[] => {
  sortersStorage.removeSorter(id);
  render();
  return getAllSorters();
};

export const updateSorters = (id: string, newState: number[]): SorterType[] => {
  sortersStorage.updateSorter(id, newState);
  render();
  return getAllSorters();
};

export const appContainer = (): HTMLElement => {
  return sorterInput({ onClick: addSorters, onTuck: t });
};
