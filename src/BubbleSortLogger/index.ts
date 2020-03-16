import { SorterType } from '../types';

const bubbleSortStateLogger = (sorters: SorterType[]) => {
  sorters.forEach((elem: SorterType) => {
    console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`);
  });
};

export default bubbleSortStateLogger;
