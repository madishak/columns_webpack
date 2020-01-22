import WatchJS from 'melanke-watchjs';

import { SorterType, StateTypes } from './types';

const { watch } = WatchJS;
const bubbleSortStateLogger = (state: SorterType[]): void => {
  // console.log(state);
  // watch(state, 'sorters', ((elem: SorterType) => {
  //   console.log('Hello, Madina', elem);
  // }));
  console.log(state);
  state.forEach((elem: SorterType): void => {
    watch(elem, elem.sorterId, () => console.log(`Current  ${elem.sorterId} - ${elem.sorterArr}`));
    console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`);
  });
};

export default bubbleSortStateLogger;
