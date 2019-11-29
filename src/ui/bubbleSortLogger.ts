import { ListTypes } from './interfaces';

const buubleSortStateLogger = (state: ListTypes[]): void => {
  state.forEach((elem: ListTypes): void =>
    console.log(`Current state is ${elem.id} - ${elem.arr}`)
  );
};

export default buubleSortStateLogger;
