import { SorterType, StateTypes } from './interfaces';

class State {
  state: StateTypes;
  public constructor() {
    this.state = {
      sorters: []
    };
  }

  public addState(value: SorterType): StateTypes {
    this.state.sorters = [...this.state.sorters, value];
    return this.state;
  }

  public removeSorter(index: number): StateTypes {
    this.state.sorters = this.state.sorters.reduce(
      (acc: SorterType[], elem: SorterType) => (elem.sorterId !== index ? [...acc, elem] : acc),
      []
    );
    return this.state;
  }

  public updateState(index: number, newState: number[]) {
    this.state.sorters.filter((elem: SorterType): number[] => {
      if (index === elem.sorterId) {
        elem.sorterArr = newState;
        return elem.sorterArr;
      }
      return elem.sorterArr;
    });
  }
}

export default State;
