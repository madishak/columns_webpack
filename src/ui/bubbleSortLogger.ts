import { SorterType } from './interfaces';

const bubbleSortStateLogger = (state: SorterType[]): void => {
  state.forEach((elem: SorterType): void =>
    console.log(`Current state is ${elem.sorterId} - ${elem.sorterArr}`)
  );
};

export default bubbleSortStateLogger;
