import { SorterType } from './types';
import BubbleSortApp from './bubbleSortApp';

const bubbleSortStateLogger = (): void => {
  const bubbleSortApp = new BubbleSortApp();
  const state = bubbleSortApp.getSorter();
  const { sorters } = state;
  console.log(bubbleSortApp.getSorter());
  sorters.forEach((elem: SorterType): void => {
    console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`);
  });
};

export default bubbleSortStateLogger;
