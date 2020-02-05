import _ from 'lodash';
import { SorterType, StateTypes } from './types';
import BubbleSort from './bubbleSort';
import DrawSorter from './drawSorter';
import bubbleSortStateLogger from './bubbleSortLogger';
import createElement from './commonComponents/createElement';
import button from './commonComponents/button';

class State {
  listRefs: object[];
  state: StateTypes;
  public constructor() {
    this.state = {
      sorters: [],
      isChanged: ''
    };
    this.listRefs = [];
  }
  public getSorter(): StateTypes {
    return this.state;
  }
  public addSorter(value: SorterType): StateTypes {
    this.state.sorters = [...this.state.sorters, value];
    console.log(this.state.sorters);
    return this.state;
  }

  private removeSorter(index: number): StateTypes {
    this.state.sorters = this.state.sorters.filter((elem: SorterType) => elem.sorterId !== index);
    return this.state;
  }

  private updateSorter(index: number, newState: number[]): SorterType[] {
    return this.state.sorters.filter((elem: SorterType): number[] => {
      if (index === elem.sorterId) {
        elem.sorterArr = newState;
        return elem.sorterArr;
      }
      return elem.sorterArr;
    });
  }

  public addRef(reference: object): object[] {
    this.listRefs = [...this.listRefs, reference];
    return this.listRefs;
  }
  public notification() {
    const { sorters } = this.state;
    console.log(this.listRefs);
    this.listRefs.map(elem => elem(sorters));
  }
}

export default State;
