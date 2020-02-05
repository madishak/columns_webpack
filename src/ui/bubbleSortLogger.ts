import { SorterType } from './types';

const bubbleSortStateLogger = (sorters: SorterType[]): void => {
  sorters.forEach((elem: SorterType): void => {
    console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`);
  });
};

export default bubbleSortStateLogger;
