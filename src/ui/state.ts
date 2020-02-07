import { SorterType, StateTypes } from './types';

class State {
  listRefsForView: any[];
  state: StateTypes;
  public constructor() {
    this.state = {
      sorters: [],
      isSortersUpdated: false
    };
    this.listRefsForView = [];
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

  public updateSorter(index: number, newState: number[]): SorterType[] {
    return this.state.sorters.filter((elem: SorterType): number[] => {
      if (index === elem.sorterId) {
        elem.sorterArr = newState;
        this.state.isSortersUpdated = true;
        return elem.sorterArr;
      }
      return elem.sorterArr;
    });
  }

  public addRefForView(reference: any): any[] {
    this.listRefsForView = [...this.listRefsForView, reference];
    return this.listRefsForView;
  }
  public viewState(): any {
    const { sorters } = this.state;
    return this.listRefsForView.map((elem: any) => elem(sorters));
  }
}

export default State;
