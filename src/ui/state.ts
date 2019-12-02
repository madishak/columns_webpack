import { ListTypes, StateTypes } from './interfaces';

class States {
  state: StateTypes;
  public constructor() {
    this.state = {
      list: []
    };
  }

  public addState(value: ListTypes): StateTypes {
    this.state.list = [...this.state.list, value];
    return this.state;
  }

  public removeSorter(index: number): StateTypes {
    this.state.list = this.state.list.reduce(
      (acc: ListTypes[], elem: ListTypes) => (elem.id !== index ? [...acc, elem] : acc),
      []
    );
    return this.state;
  }

  public updateState(index: number, newState: number[]) {
    this.state.list.filter((elem: ListTypes): number[] => {
      if (index === elem.id) {
        elem.arr = newState;
        return elem.arr;
      }
      return elem.arr;
    });
  }
}

export default States;
