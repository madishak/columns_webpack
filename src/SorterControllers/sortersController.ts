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

export const getAllSorters = (): SorterType[] => sortersStorage.getSorter();

const render = (): void => {
  app.append(
    bubbleSortList({
      sorters: getAllSorters(),
      removeSorter: removeSorters,
      updateSorter: uptSorters
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

export const removeSorters = (id: string): SorterType[] => {
  sortersStorage.removeSorter(id);
  render();
  return getAllSorters();
};

export const updateSorters = (id: string, newState: number[]): SorterType[] => {
  console.log(id, newState);
  sortersStorage.updateSorter(id, newState);
  render();
  // bubbleSortStateLogger(getAllSorters());
  return getAllSorters();
};

let uptSorters = _.curry(updateSorters);
// let t = uptSorters(1);
// let t1 = t([1,4,5,6,7, 2]);

export const appContainer = (): HTMLElement => {
  return sorterInput({ onClick: addSorters });
};
