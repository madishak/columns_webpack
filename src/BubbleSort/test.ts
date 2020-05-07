import { IndexStorage, Indexes } from '../types';

class BubbleSort {
  // arr: number[];
  // arrCopy: number[];
  listOfIndexes: number[];
  indexStorage: IndexStorage;
  indexes: Indexes;
  currentIndex: number;
  currentPosition: number;

  public constructor() {
    // this.arr = array;
    // this.arrCopy = [];
    this.listOfIndexes = [];
    // this.indexStorage = { id: '', arr: [] };
    this.indexStorage = {};
    // this.indexes = { list: [], currentIndex: 0, currentPosition: 0 };
    this.currentIndex = 0;
    this.currentPosition = 0;
  }

  public increaseSort(id: string, arrCopy: number[]): number[] {
    console.log('List', this.listOfIndexes);
    console.log(this.indexStorage);

    const indexesKeys = Object.keys(this.indexStorage);
    console.log('Key', indexesKeys, id);
    if (!indexesKeys.includes(id)) {
      console.log(indexesKeys.includes(id));
      this.indexStorage[id].list = [];
    }
    console.log('Length', this.indexStorage[id].list.length);
    if (this.currentIndex === this.listOfIndexes.length) {
      for (let i = 0; i < arrCopy.length - 1; i += 1) {
        for (let j = this.currentPosition; j < arrCopy.length - i - 1; j += 1) {
          if (arrCopy[j] > arrCopy[j + 1]) {
            BubbleSort.swapElements(arrCopy, j);

            console.log(indexesKeys.includes(id));
            console.log('shfagh', this.listOfIndexes);
            this.listOfIndexes = [...this.listOfIndexes, j];

            this.indexStorage[id].list = [...this.indexStorage[id].list, j];
            this.currentPosition = j;
            this.currentIndex += 1;
            return arrCopy;
          }
          this.currentPosition = 0;
        }
      }
    } else {
      // BubbleSort.swapElements(arrCopy, this.listOfIndexes[this.currentIndex]);
      BubbleSort.swapElements(arrCopy, this.indexStorage[id].list[this.currentIndex]);
      this.currentIndex += 1;
      return arrCopy;
    }
    return arrCopy;
  }

  public decreaseSort(id: string, arrCopy: number[]): number[] {
    for (let i = 0; i < arrCopy.length; i += 1) {
      if (this.currentIndex > 0) {
        // BubbleSort.swapElements(arrCopy, this.listOfIndexes[this.currentIndex - 1]);
        BubbleSort.swapElements(arrCopy, this.indexStorage[id].list[this.currentIndex - 1]);
        this.currentIndex -= 1;
        // this.currentPosition = this.listOfIndexes[this.currentIndex];
        this.currentPosition = this.indexStorage[id].list[this.currentIndex];
        return arrCopy;
      }
    }
    return arrCopy;
  }

  static swapElements(array: number[], index: number): number[] {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
    return array;
  }

  // private storageI(id: string, j: number): IndexStorage {
  //   // this.indexStorage = [...this.indexStorage, {id:'',arr: []}];
  //
  //   const indexes = Object.entries(this.indexStorage);
  //
  //   // indexes.forEach((ind: string) => {
  //   for (const [ind, value] of indexes) {
  //     // for (const elem of this.indexStorage) {
  //
  //     if (ind === id) {
  //       this.listOfIndexes = [...this.listOfIndexes, j];
  //       // elem.arr = this.listOfIndexes;
  //       // elem.arr = [...elem.arr, j];
  //       this.indexStorage = { ...this.indexStorage, id, arr: this.listOfIndexes };
  //     } else {
  //       this.listOfIndexes = [...this.listOfIndexes, j];
  //       // elem.arr = [...elem.arr, j];
  //       this.indexStorage = { ...this.indexStorage, id, arr: this.listOfIndexes };
  //       // this.indexStorage = [...this.indexStorage, {id, arr: elem.arr}];
  //     }
  //   }
  //   return this.indexStorage;
  // }
}

export default BubbleSort;
