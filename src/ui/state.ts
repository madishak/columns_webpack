import { SorterType, StateTypes } from './types';

class State {
  state: StateTypes;
  public constructor() {
    this.state = {
      sorters: []
    };
  }
  public getState(): StateTypes {
    return this.state;
  }
  public addSorter(value: SorterType): StateTypes {
    this.state.sorters = [...this.state.sorters, value];
    return this.state;
  }

  public removeSorter(index: number): StateTypes {
    this.state.sorters = this.state.sorters.filter((elem: SorterType) => elem.sorterId !== index);
    return this.state;
  }

  public updateSorter(index: number, newState: number[]): void {
    return this.state.sorters.forEach((elem: SorterType): number[] => {
      if (index === elem.sorterId) {
        elem.sorterArr = newState;
        return elem.sorterArr;
      }
      return elem.sorterArr;
    });
  }

  // public addRefForView(reference: any): any[] {
  //   this.listRefsForView = [...this.listRefsForView, reference];
  //   return this.listRefsForView;
  // }
  // public viewState(): any {
  //   const { sorters } = this.state;
  //   return this.listRefsForView.forEach((elem: any) => elem(sorters));
  // }
}

export default State;
