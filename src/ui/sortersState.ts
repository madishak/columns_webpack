import { SorterType } from '../types';

class SortersState {
  sorters: SorterType[];
  public constructor() {
    this.sorters = [];
  }
  public getSorter(): SorterType[] {
    return this.sorters;
  }
  public addSorter(value: SorterType): SorterType[] {
    this.sorters = [...this.sorters, value];
    return this.sorters;
  }

  public removeSorter(index: number): SorterType[] {
    this.sorters = this.sorters.filter((elem: SorterType) => elem.sorterId !== index);
    return this.sorters;
  }

  public updateSorter(index: number, newState: number[]): void {
    return this.sorters.forEach((elem: SorterType): number[] => {
      if (index === elem.sorterId) {
        elem.sorterArr = newState;
        return elem.sorterArr;
      }
      return elem.sorterArr;
    });
  }
}

export default SortersState;
