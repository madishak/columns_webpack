import WatchJS from 'melanke-watchjs';

import { SorterType, StateTypes } from './types';
import BubbleSortApp from './bubbleSortApp';

const { watch } = WatchJS;
// const bubbleSortStateLogger = (state: SorterType[]): void => {
//   // console.log(state);
//   // watch(state, 'sorters', ((elem: SorterType) => {
//   //   console.log('Hello, Madina', elem);
//   // }));
//   console.log(state);
//   state.forEach((elem: SorterType): void => {
//     console.log(elem);
//     watch(elem, elem.sorterId, () => console.log(`Current  ${elem.sorterId} - ${elem.sorterArr}`));
//     console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`);
//   });
// };

const bubbleSortStateLogger = (): void => {
  // console.log(state);
  // watch(state, 'sorters', ((elem: SorterType) => {
  //   console.log('Hello, Madina', elem);
  // }));
  const bubbleSortApp = new BubbleSortApp();
  const state = bubbleSortApp.getState();
  const { sorters, isChanged } = state;
  console.log(isChanged);
  if (isChanged) {
    sorters.forEach((elem: SorterType): void => {
      console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`);
    });
  }
};

export default bubbleSortStateLogger;
