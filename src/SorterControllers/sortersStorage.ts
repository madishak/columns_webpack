import { SorterType } from '../types';

class SortersStorage {
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

  public removeSorter(index: string): SorterType[] {
    this.sorters = this.sorters.filter((elem: SorterType) => elem.sorterId !== index);
    return this.sorters;
  }

  public updateSorter(index: string, newState: number[], indexList: number[]) {
    console.log('IndexList', indexList);
    return this.sorters.forEach((elem: SorterType): number[] => {
      if (elem.indexList === undefined) {
        throw new Error('IndexList is undefined');
      }
      if (index === elem.sorterId) {
        elem.sorterArr = newState;
        console.log('elem.indexList', elem.indexList);
        elem.indexList = [...indexList];
        return elem.sorterArr;
      }
      return elem.sorterArr;
    });
  }
}

export default SortersStorage;
