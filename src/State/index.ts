import { StateTypes } from '../types';

class State {
  state: StateTypes;
  public constructor() {
    this.state = {};
  }
  public getState(): StateTypes {
    return this.state;
  }
  public addState(value: StateTypes): StateTypes {
    this.state.sorters = value.sorters;
    return this.state;
  }

  // public removeSorter(index: number): StateTypes {
  //   let stateItems: StateTypes[] = [];
  //   for (const i in this.state) {
  //     stateItems = [...stateItems, i];
  //   }
  //   // stateItems = [...stateItems, this.state];
  //   stateItems = stateItems.filter((elem: SorterType) => elem.sorterId !== index);
  //   return this.state;
  // }
  //
  // public updateSorter(index: number, newState: number[]): void {
  //   return this.state.sorters.forEach((elem: SorterType): number[] => {
  //     if (index === elem.sorterId) {
  //       elem.sorterArr = newState;
  //       return elem.sorterArr;
  //     }
  //     return elem.sorterArr;
  //   });
  // }
}

export default State;
