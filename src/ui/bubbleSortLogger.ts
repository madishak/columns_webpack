import WatchJS from 'melanke-watchjs';

import { SorterType, StateTypes } from './types';

const { watch } = WatchJS;
const bubbleSortStateLogger = (state: StateTypes): void => {
  console.log(state);
  watch(state, 'sorters', () => console.log('Hello, Madina'));

  // state.forEach((elem: SorterType): void =>
  //   console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`)
  // );
};

export default bubbleSortStateLogger;
